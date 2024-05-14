const express = require('express')
const db = require('../db/')
const router = express.Router()


router.get('/images', (req, res) => {
    res.send('images')
})

module.exports = router