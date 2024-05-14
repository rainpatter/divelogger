require('dotenv').config()

const bcrypt = require('bcrypt')
const db = require('./index.js')

const saltRounds = 10;

const username = 'georgia'
const email = 'gs@test.com'
const plainTextPassword = 'test'
const date_joined = '2024-05-01'
const location = 'Sydney'

const sql = `
    INSERT INTO 
        users 
        (username,
        email,
        password_digest,
        date_joined,
        location) 
    VALUES ($1, 
            $2, 
            $3, 
            $4, 
            $5)
    RETURNING
        *
    ;
`

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(plainTextPassword, salt, (err, hash) => {
        console.log(hash)
        db.query(sql, [username, email, hash, date_joined, location], (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result.rows[0])
        })
    })
})
