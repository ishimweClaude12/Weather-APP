const express = require('express')
const https = require('node:https')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended : true}))

const apiKey = "3ffa21f4913a7222de4e381db9250767"
let temp = "";
let city = "";
app.get('/', function(req, res){
  //  let city= body.cityName.value;
  res.render('index', {temp: temp, city : city})



})
app.post('/', function(req, res){
   
     let city =  req.body.cityName;
     const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city+ "&APPID=3ffa21f4913a7222de4e381db9250767&units=metric";
     
     https.get(url, function(response){
         
         response.on("data", function(data){
             const weatherData = JSON.parse(data);
             console.log(weatherData.main.temp)
             temp = weatherData.main.temp;
       // res.send("The temperature in London is " + temp + "degrees celcius");
       res.redirect('/');

         });
  }) 

})


app.listen(4000 , function(){
    console.log("The Server was Started at Port 4000")
});