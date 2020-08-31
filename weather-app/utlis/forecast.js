const request = require('postman-request')

const forecast = (latitude,longitute,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=03437b80823be41fe6545bb95eb151b6&query='+ latitude + ',' + longitute + '&units=f'

    request({ url: url, json: true}, (error,response) => {
        if(error){
            callback('Unable to connect to server', undefined)
        }else if(response.body.error){
            console.log(response.body)
            callback('Unable to find locate the place', undefined)
        }else{
            callback(undefined, response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature + ' degress out there. ' + 'It feelslike ' + response.body.current.feelslike + ' degress out there.')
        }
    })
}

module.exports = forecast