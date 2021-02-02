const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=4968eb90f61f269054d90afe742acad4&query=37.8267,-122.4233&units=f";

request({
    url: url,
    json: true
}, (err, response)=>{
    if(err){
        console.log("Unable to connect to weather service")
    }
    else{
        console.log( response.body.current.weather_descriptions[0] + "It is currently " + response.body.current.temperature + "degrees out but it feels like" + response.body.current.feelslike);
    }
    // console.log(response.body.current)
    // console.log(response.body.current.weather_descriptions[0] + ".It is currently" +" " + response.body.current.temperature +" " + "degrees out. It feels like" + " " + response.body.current.feelslike + " " + "degrees out.")
    // const data = JSON.parse(response.body)
    // console.log(data.current)
});

const urlTwo = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWFoYyIsImEiOiJja2p2bWRkM2YyZ3RvMnprM3I1OGgwYmdjIn0.7onFIo8F0HJg2mLTCum14Q&limit=1"
request({
    url: urlTwo,
    json: true
}, (err, response)=>{
    if(err){
        console.log("Unable to connect to network services")
    }
    else {
        console.log(response.body.features[0].center[1]);
   console.log(response.body.features[0].center[0]);
    }
});