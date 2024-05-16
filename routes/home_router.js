const express = require('express')
const db = require('../db/')
const router = express.Router()


router.get('/', (req, res) => {

    const sql = `
    SELECT
    *
    FROM images 
    INNER JOIN users
    ON 
    images.user_id = users.id
    INNER JOIN dive_sites
    ON dive_sites.id = images.site_id
    ORDER BY
    images.upload_date DESC
    ;
    `
    

    db.query(sql, (err, result) => {
        if (err) console.log(err)

        const images = result.rows
        res.render('home', {images: images})
    })
    


})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router