const express = require('express')
const db = require('../db/')
const router = express.Router()
const bcrypt = require('bcrypt')
const dateConvert = require('../middleware/convert_datetime')


router.get('/users', (req, res) => {
    
    sql = `
    SELECT 
    * 
    FROM users
    ORDER BY
    id;
    `

    db.query(sql, (err, result) => {
        if (err) console.log(err)
        
        const users = result.rows
        res.render('users/index', {users: users})
    })

})

router.get('/user/new', (req, res) => {
    res.render('users/new', {statement: ''})
})


router.get('/users/:id', (req, res) => {

    const sql = `
    SELECT
    *
    FROM users 
    WHERE
    id = $1
    ;
    `

    const imageSql = `
    SELECT
    *
    FROM images 
    WHERE
    user_id = $1
    ;
    `
    
    const favouritesSql = `
    SELECT
    *
    FROM favourites 
    INNER JOIN dive_sites
    ON 
    favourites.site_id = dive_sites.id
    WHERE
    favourites.user_id = $1
    ;
    `

    db.query(sql, [req.params.id], (err, result) => {
        if (err) console.log(err)
        
        const user = result.rows[0]

        console.log(user)

        db.query(imageSql, [req.params.id], (err, result) => {
            if (err) console.log(err)
            
            const images = result.rows

            console.log(images)
        
            db.query(favouritesSql, [req.params.id], (err, result) => {
                if (err) console.log(err)

                favourites = result.rows

                console.log(favourites)

                res.render('users/show', {user: user, images: images, favourites: favourites})
            })

        })

    })

})

router.post('/users', (req, res) => {

    const saltRounds = 10;

    let username = req.body.username
    let email = req.body.email
    let plainTextPassword = req.body.password
    let date = dateConvert(new Date())

    const sqlSearch = `
        SELECT
        *
        FROM users
        WHERE $1 
        IN
        (username) 
        OR $2
        IN (email)
        ; 
    `    

    const sql = `
        INSERT INTO 
            users 
            (username,
            email,
            password_digest,
            date_joined) 
        VALUES ($1, 
                $2, 
                $3, 
                $4)
        RETURNING
            *
        ;
        `

    db.query(sqlSearch, [username, email], (err, result) => {
        if (err) console.log(err)
        
        if (result.rows.length > 0) {
            console.log(result.rows)
            res.render('users/new', {statement: 'email or username already exists'})
        } else if (result.rows.length === 0) {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(plainTextPassword, salt, (err, hash) => {
                    console.log(hash)
                    db.query(sql, [username, email, hash, date], (err, result) => {
                        if (err) {
                            console.log(err)
                        }
                        console.log(result.rows[0])
                        res.render('login', {statement: 'Account created successfuly. Please log in'})
                    })
                })
            }) 
        }
    })
   
})

module.exports = router