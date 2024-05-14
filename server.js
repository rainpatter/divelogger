require('dotenv').config()

const express = require('express')
const app = express()
const port = 8080

const expressLayouts = require('express-ejs-layouts')
const requestLogger = require('./middleware/request_logger')
const methodOverride = require('method-override')
const session = require('express-session')

const homeRouter = require('./routes/home_router')
const sitesRouter = require('./routes/sites_router')
const imagesRouter = require('./routes/images_router')
const usersRouter = require('./routes/users_router')

app.set('view engine', 'ejs')

app.use(expressLayouts)
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded())

app.use(requestLogger)

app.use(session({
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 3 }, 
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true
}))

app.use(homeRouter)
app.use(sitesRouter)
app.use(imagesRouter)
app.use(usersRouter)

app.listen(port, () => {
    console.log(`server listening one port ${port}`)
})