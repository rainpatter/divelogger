const express = require('express')
const db = require('../db/')
const router = express.Router()


router.get('/users', (req, res) => {
    res.send('users')
})

module.exports = router