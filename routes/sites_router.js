const express = require('express')
const db = require('../db/')
const router = express.Router()


router.get('/sites', (req, res) => {
    
    sql = `
    SELECT 
    * 
    FROM dive_sites
    ORDER BY
    id;
    `

    db.query(sql, (err, result) => {
        if (err) console.log(err)
        
        const sites = result.rows
        res.render('sites/index', {sites: sites})
    })

})

router.get('/sites/new', (req, res) => {
    res.render('sites/new')
})

router.post('/sites', (req, res) => {

    let name = req.body.name
    let location = req.body.location
    
    let sql = `
    INSERT INTO 
    dive_sites (
        name,
        location
    ) VALUES (
        $1,
        $2
    )
    RETURNING *
    ;
    `

    db. query(sql, [name, location], (err, result) => {
        if (err) console.log(err)

        console.log(result.rows[0])
        res.redirect('/sites')
    })

})

module.exports = router