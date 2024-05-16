require('dotenv').config()

const express = require('express')
const app = express()
const port = 9090

const expressLayouts = require('express-ejs-layouts')
const requestLogger = require('./middleware/request_logger')
const methodOverride = require('method-override')
const session = require('express-session')
const setCurrentUser = require('./middleware/set_current_user')
const helpers = require('./middleware/helpers')


const homeRouter = require('./routes/home_router')
const sitesRouter = require('./routes/sites_router')
const imagesRouter = require('./routes/images_router')
const usersRouter = require('./routes/users_router')
const sessionRouter = require('./routes/session_router')
const commentRouter = require('./routes/comments_router')
const favouritesRouter = require('./routes/favourites_router')

app.set('view engine', 'ejs')

app.use(expressLayouts)
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded())


app.set('layout login', 'false')

app.use(requestLogger)
app.use(helpers)


app.use(session({
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 3 }, 
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true
}))

app.use(setCurrentUser)

app.use(homeRouter)
app.use(sessionRouter) // not working
app.use(sitesRouter)
app.use(imagesRouter)
app.use(usersRouter)
app.use(commentRouter)
app.use(favouritesRouter)


app.listen(port, () => {
    console.log(`server listening one port ${port}`)
})