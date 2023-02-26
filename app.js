const express = require('express')
const https = require('node:https')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended : true}))

const apiKey = "3ffa21f4913a7222de4e381db9250767"
let city = "Bali"
app.get('/', function(req, res){
  //  let city= body.cityName.value;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city+ "&APPID=3ffa21f4913a7222de4e381db9250767&units=metric";
    https.get(url, function(response){
        let temp = ""
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            temp = weatherData.main.temp;
        res.render('index', {temp: temp})
     //  res.send("The temperature in London is " + temp + "degrees celcius");
        });
 }) 
app.post('/', function(req, res){
    console.log(req.body.cityName);
})


})

app.listen(4000 , function(){
    console.log("The Server was Started at Port 4000")
});