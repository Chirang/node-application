const request = require('postman-request') 
const geocode = require('./utlis/geocode')
const forecast = require('./utlis/forecast')

const address = process.argv[2]

if(!address){
    console.log('Please provide address')
}else{
    geocode(address,(error,{latitude,longitute,location})=>{
        if(error){
            return console.log(error)
        }
    
        forecast(latitude,longitute,(error,forecastData)=>{
        if(error){
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
        })
    })
}
