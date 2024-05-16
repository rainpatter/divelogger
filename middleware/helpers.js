function helpers(req, res, next) {
    
    res.locals.convertDatetoDay = (date) => {

        newDate = new Date(date).toString()
        dateString = newDate.split(' ').slice(1,4).join(' ')
        return dateString

    }

    res.locals.convertDatetoHour = (date) => {


        newDate = new Date(date).toString()
        dateString = newDate.split(' ').slice(1,5).join(' ')
        return dateString

    }

    next()
}

module.exports = helpers