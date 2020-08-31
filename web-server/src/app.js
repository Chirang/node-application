const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public/')
app.use(express.static(publicDirectoryPath))

app.get('/weather',(req,res)=>{
    res.send({
        forecast: '15 degree',
        location: 'India'
    })
})

app.listen(3001,()=>{
    console.log('Server is up')
})