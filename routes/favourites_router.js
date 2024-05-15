const express = require('express')
const router = express.Router()
const db = require('../db/')
const ensureLoggedIn = require('../middleware/ensure_logged_in')

router.post('/favourites', ensureLoggedIn, (req, res) => {
    
    let site_id = req.body.site_id
    let user_id = req.session.userId

    const sql = `
    INSERT INTO
        favourites 
        (user_id,
        site_id
        )
    VALUES 
        ($1, 
        $2)
    ;
    `

    db.query(sql, [user_id, site_id], (err, result) => {

        if (err) console.log(err)

        // redirect uses get method
        res.redirect(`/sites/${site_id}`)

    })
})

module.exports = router