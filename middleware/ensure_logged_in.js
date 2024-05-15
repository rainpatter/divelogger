function ensureLoggedIn(req, res, next) {
    if (req.session.userId) {
        next()
    } else {
        res.render('login', {statement: ''})
    }

}

module.exports = ensureLoggedIn