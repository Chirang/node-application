const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('postman-request')
const forecast = require('./utlis/forecast')
const geocode = require('./utlis/geocode')

const app = express()

//define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public/')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlers engine and views
app.set('view engine', 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index', {
        title: 'Weather',
        name: 'Chirang'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About me',
        name: 'Chirang'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        name: 'Chirang'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide address'
        })
    }

    geocode(req.query.address,(error,{latitude,longitute,location} = {} )=>{
        if(error){
            return res.send({ error })
        }
    
        forecast(latitude,longitute,(error,forecastData)=>{
            if(error){
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address:req.query.address

            })
        })
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404',
        name:'Chirang',        
        errorMessage: 'Help article not found'   
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name:'Chirang',
        errorMessage: 'Page not found'
    })
})

app.listen(3001,()=>{
    console.log('Server is up')
})