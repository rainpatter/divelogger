const express = require('express')
const router = express.Router()
const db = require('../db/')
const bcrypt = require('bcrypt')

router.get('/login', (req, res) => {
    res.render('login', {statement: ''})
})

router.post('/login', (req, res) => {


    const username = req.body.username
    const plainTextPassword = req.body.password

    const sql = `
        SELECT *
        FROM
        users
        WHERE username = $1;
    `
    db.query(sql, [username], (err, result) => {
        
        if (err) {
            console.log(err)
        }
        
        if (result.rows.length === 0) {
            console.log('user not found')
            res.render('login', {statement: ''})
            return 
        }


        const hashedPassword = result.rows[0].password_digest 
        bcrypt.compare(plainTextPassword, hashedPassword, (err, isCorrect) => {
            if (err) console.log(err)

            if (!isCorrect) {
                console.log('password doesnt match')
                return res.render('login', {statement: 'wrong username or password'})
            }

            req.session.userId = result.rows[0].id

            res.redirect('/')
        })
    })

})

router.delete('/logout', (req, res) => {
    req.session.userId = null
    res.redirect('/login')
})

module.exports = router