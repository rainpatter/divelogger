const express = require('express')
const db = require('../db/')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('home')
})

module.exports = router