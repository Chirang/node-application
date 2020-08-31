const request = require('postman-request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiY2hpcmFuZyIsImEiOiJja2VobHpoY2YwYnVpMnNvNm43dmtvenoyIn0.f19v1nkBOXO-kMFKU2fDsQ&limit=1'
    request({ url: url, json: true}, (error,response)=>{
        if(error){
            callback('Unable to connect to server', undefined)
        }else if(response.body.message){
            callback('Wrong link',undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitute: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })      
        }
    })
}

module.exports = geocode
