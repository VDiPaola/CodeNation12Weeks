//run with: APPID="9c167a7384270c6c4ca3cbed17702c6a" node index.js

//requires
const express = require("express");
const app = express();
const path = require('path')
const hbs = require('express-handlebars')
const weatherFunction = require('./lib/getWeather.js')

//make public folder static
app.use(express.static(path.join(__dirname, 'public')));

//initiate handlebars engine
app.engine(".hbs", hbs({
    defaultLayout: 'layout',
    extname: ".hbs"
}))

app.set("view engine", '.hbs')

app.get('/', async function (req, res) {
    //default location
    let locationString = "London,uk"
    //wait for weatherfunction to return data
    let data = await weatherFunction(locationString)
    
    if(data){
        //sets variables for all the temp data
        let tempData = data.list[0].main
        let temperature = JSON.stringify(tempData.temp)
        let pressure = JSON.stringify(tempData.pressure)
        let humidity = JSON.stringify(tempData.humidity)
        let tempMin = JSON.stringify(tempData.temp_min)
        let tempMax = JSON.stringify(tempData.temp_max)

        //sets object
        let dataToRender = {
            location:locationString,
            temp: temperature,
            press: pressure,
            humid: humidity,
            mintemp: tempMin,
            maxtemp: tempMax
        }

        //renders page
        res.render('index',dataToRender)
    }else{
        res.send('couldnt find location')
    }
})

app.listen(3000, function(){
    console.log("listening");
})
