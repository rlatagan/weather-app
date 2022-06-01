const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f95ebaab9b551d0e409aefc1b5291cff&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast

// const url = 'http://api.weatherstack.com/current?access_key=f95ebaab9b551d0e409aefc1b5291cff&query=New%20York'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service.')
//     } else if (response.body.error) {
//         console.log('Unable to find location.')
//     } else {
//         const result = "It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out."
//         console.log(result)
//     }
// })