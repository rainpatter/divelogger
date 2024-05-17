const express = require('express')
const db = require('../db/')
const router = express.Router()
const ensureLoggedIn = require('../middleware/ensure_logged_in')


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



router.post('/sites', ensureLoggedIn, (req, res) => {

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

        res.redirect('/sites')
    })

})

router.get('/sites/new', (req, res) => {
    res.render('sites/new')
})


router.get('/sites/:id', (req, res) => {
    
    currentUserId = req.session.userId

    const sql = `
        SELECT 
        * 
        FROM 
        dive_sites
        WHERE 
        id = $1
        ;
    `

    const imageSql = `
        SELECT users.id AS user_id,
        users.username AS username,
        images.id AS id,
        images.site_id AS site_id,
        images.image_url AS image_url,
        images.upload_date AS upload_date,
        images.user_id AS user_id2
        FROM 
        users 
        JOIN
        images
        ON users.id = images.user_id
        WHERE site_id = $1
        ORDER BY images.upload_date DESC;
        ;
    `

    const commentSql = `
        SELECT users.id AS user_id,
        users.username AS username,
        comments.id AS id,
        comments.site_id AS site_id,
        comments.content AS content,
        comments.comment_date AS comment_date,
        comments.user_id AS user_id2
        FROM
        users 
        JOIN
        comments 
        ON users.id = comments.user_id
        WHERE site_id = $1
        ORDER BY comments.comment_date DESC;
        `

    const favouritesSql = `
        SELECT 
        *
        FROM favourites
        WHERE site_id = $1
        AND user_id = $2
    `

    db.query(sql, [req.params.id], (err, result) => {
        if (err) console.log(err)

        const site = result.rows[0]
        
        db.query(imageSql, [req.params.id], (err, result) => {
            if (err) console.log(err)
        
            const images = result.rows


            db.query(commentSql, [req.params.id], (err, result) => {
                if (err) console.log(err)

                    const comments = result.rows


                db.query(favouritesSql, [req.params.id, req.session.userId], (err,result) => {
                    if (err) console.log(err)

                    if (result.rows.length === 0) {

                        isFavourite = false
                        favourite = ''

                    } else {
                        

                        isFavourite = true
                        favourite = result.rows[0]
  

                    }

                    res.render('sites/show', {site: site, images: images, comments: comments, isFavourite: isFavourite, currentUserId: currentUserId, favourite: favourite})
                    
                })
            })
        })

     })

    })




module.exports = router