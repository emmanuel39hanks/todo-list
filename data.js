
module.exports.getDate = function() {
    let today = new Date()
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    return day = today.toLocaleDateString('en-US', options)
}

module.exports.getDay = function() {
    let today = new Date()
    let options = {
        weekday: 'long',
    }

    return day = today.toLocaleDateString('en-US', options)

}