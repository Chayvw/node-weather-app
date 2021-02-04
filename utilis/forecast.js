const request = require("request");

const forecast=(longitude, latitude, cb) =>{
    const url = "http://api.weatherstack.com/current?access_key=4968eb90f61f269054d90afe742acad4&query=" + longitude + "," + latitude + "&units=f";
    request({
        url: url, json: true}, (err, response) =>{
           if(err){
               cb("unable to connect to weather service", undefined)
           }
           else if(response.body.error){
               cb("unable to find location", undefined)
           }
           else{
               cb(undefined, response.body.current.weather_descriptions[0] + "It is currently " + response.body.current.temperature + "degrees out but it feels like" + response.body.current.feelslike)
           }
    })
}

module.exports = forecast; 