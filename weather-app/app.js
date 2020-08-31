const request = require('postman-request') 
const geocode = require('./utlis/geocode')
const forecast = require('./utlis/forecast')

geocode('Germany',(error,data)=>{
    if(error){
        return console.log(error)
    }

    forecast(data.latitude,data.longitute,(error,forecastData)=>{
    if(error){
        return console.log(error)
    }
    console.log(data.location)
    console.log(forecastData)
    })
})
