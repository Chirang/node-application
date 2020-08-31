const request = require('postman-request')

const forecast = (latitude,longitute,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=03437b80823be41fe6545bb95eb151b6&query='+ latitude + ',' + longitute + '&units=f'

    request({ url, json: true}, (error,{ body }) => {
        if(error){
            callback('Unable to connect to server', undefined)
        }else if(body.error){
            callback('Unable to find locate the place', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] +'. It is currently ' + body.current.temperature + ' degress out there. ' + 'It feelslike ' + body.current.feelslike + ' degress out there.')
        }
    })
}

module.exports = forecast