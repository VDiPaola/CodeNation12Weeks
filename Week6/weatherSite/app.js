//variables
let APPID = "9c167a7384270c6c4ca3cbed17702c6a"
let locationVar = "london,uk"
let system = "metric"
//main function
function run(){
      //get request to api
      $.get( `http://api.openweathermap.org/data/2.5/find?q=${locationVar}&units=${system}&APPID=${APPID}`, function( data ) {
            try{
            //sets temperature variables
            let tempData = data.list[0].main
            let temperature = JSON.stringify(tempData.temp)
            let pressure = JSON.stringify(tempData.pressure)
            let humidity = JSON.stringify(tempData.humidity)
            let tempMin = JSON.stringify(tempData.temp_min)
            let tempMax = JSON.stringify(tempData.temp_max)

            let x = "C"
            
            //changes from Celsius to Farrenheight if they select imperial system
            if(system == "imperial"){
                  x = "F"
            }

            //sets elements to the values
            document.getElementById('location').innerHTML = locationVar
            document.getElementById('temperature').innerHTML = temperature + " &deg" + x
            document.getElementById('pressure').innerHTML = pressure + "hpa"
            document.getElementById('humidity').innerHTML = humidity + "%"
            document.getElementById('mintemp').innerHTML = tempMin + " &deg" + x
            document.getElementById('maxtemp').innerHTML = tempMax + " &deg" + x
            }catch(err){
                  console.log(err)
                  alert("failed to get location")
            }
      });
}


document.getElementById('submitButton').addEventListener('click',function(e){
      
      let city = document.getElementById('cityInput').value
      let country = document.getElementById('countryInput').value
      system = "metric"

      //if they dont have metric selected then change to imperial
      if(!(document.getElementById('metric').checked)){
            system = "imperial"
      }

      //if they typed something for city
      if(city != ""){
            let final = city

            //if they typed something for country
            if(country != ""){
                  //append country to final variable
                  final += "," + country
            }
      
            //changes variable used in the get request to the selected city/country
            locationVar = final
            
      }
      run()
})