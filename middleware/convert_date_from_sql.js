
function convertDateForDisplay(dateString) {
    converted = sqlString.split(' ')
    trimmedString = converted.slice(1, 4).join(" ")
    return trimmedString
}

module.exports = convertDateForDisplay

