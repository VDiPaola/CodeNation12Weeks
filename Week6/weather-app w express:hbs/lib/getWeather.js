let request = require('request')
const {promisify} = require('util')
const fs = require('fs')
//creates a promise automatically using promisify
const promisifyRequest = promisify(request)

async function main(location){
    //gets weather data
    let data = await promisifyRequest({
        uri: `http://api.openweathermap.org/data/2.5/find?q=${location}&APPID=${process.env.APPID}`,
        json:true
    })
    console.log('returning data from ' + location)
    return data.body
}
//exports function
module.exports = main;
