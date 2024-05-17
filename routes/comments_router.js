const express = require('express')
const router = express.Router()
const db = require('../db/')
const dateConvert = require('../middleware/convert_datetime')
const ensureLoggedIn = require('../middleware/ensure_logged_in')

router.post('/comments', ensureLoggedIn, (req, res) => {
    
    let content = req.body.content
    let site_id = req.body.site_id
    let user_id = req.session.userId
    let comment_date = dateConvert(new Date())

    const sql = `
    INSERT INTO
        comments
        (
            user_id,
            site_id,
            content,
            comment_date
        )
    VALUES 
        ($1, 
        $2, 
        $3, 
        $4)
    ;
    `

    db.query(sql, [user_id, site_id, content, comment_date], (err, result) => {

        if (err) console.log(err)

        res.redirect(`/sites/${site_id}`)

    })
})

router.delete('/comments/:id', (req, res) => {
    
    let siteId = req.body.site_id

    const sql = 
    `DELETE 
    FROM 
    comments 
    WHERE 
    id = $1
    ;
    `

    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.redirect(`/sites/${siteId}`)
    })
})



module.exports = router