const express = require('express')
const db = require('../db/')
const router = express.Router()
const dateConvert = require('../middleware/convert_datetime')
const ensureLoggedIn = require('../middleware/ensure_logged_in')
const upload = require('../middleware/upload')


router.get('/images', (req, res) => {
    res.send('images')
})

router.post('/images', ensureLoggedIn, upload.single('upload_file'), (req, res) => {

    console.log(req.file.path)
    let image_url = req.file.path
    let user_id = req.session.userId
    let site_id = req.body.site_id
    let upload_date = dateConvert(new Date())
    
    let sql = `
    INSERT INTO 
    images (
        user_id,
        site_id,
        image_url,
        upload_date
    ) VALUES (
        $1,
        $2,
        $3,
        $4
    )
    RETURNING *
    ;
    `

    db. query(sql, [user_id, site_id, image_url, upload_date], (err, result) => {
        if (err) console.log(err)

        res.redirect(`/sites/${site_id}`)
    })

})



router.delete('/images/:id', (req, res) => {
    
    let siteId = req.body.site_id
    console.log("REQ PARAMS ID "+req.params.id)

    const sql = 
    `DELETE 
    FROM 
    images 
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