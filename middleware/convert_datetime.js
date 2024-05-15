
function dateToSQl(date) {
    sqlString = date.toISOString().slice(0,19).replace('T', ' ')
    return sqlString
}

module.exports = dateToSQl