const express = require('express')
const http = require('https')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended : true}))

const apiKey = "3ffa21f4913a7222de4e381db9250767"
let day = "Sunday"
app.get('/', function(req, res){
    res.render('index.ejs', {today: day})
    res.send()
})

// app.get('/' ,function(req, res){
//     res.render('index.ejs', {today: day})
// })
app.listen(4000 , function(){
    console.log("The Server was Started at Port 4000")
})