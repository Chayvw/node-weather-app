const request = require("request")
const geoCode = require("./utilis/geocode")
const forecast = require("./utilis/forecast")

// const url = "http://api.weatherstack.com/current?access_key=4968eb90f61f269054d90afe742acad4&query=37.8267,-122.4233&units=f";

// request({
//     url: url,
//     json: true
// }, (err, response)=>{
//     if(err){
//         console.log("Unable to connect to weather service")
//     }
//     else{
//         console.log( response.body.current.weather_descriptions[0] + "It is currently " + response.body.current.temperature + "degrees out but it feels like" + response.body.current.feelslike);
//     }
// });

// const urlTwo = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWFoYyIsImEiOiJja2p2bWRkM2YyZ3RvMnprM3I1OGgwYmdjIn0.7onFIo8F0HJg2mLTCum14Q&limit=1"
// request({
//     url: urlTwo,
//     json: true
// }, (err, response)=>{
//     if(err){
//         console.log("Unable to connect to network services")
//     }
//     else if (response.body.features.length === 0){ 
//          console.log("Unable to find location. Try another search")
//     }
//     else {
//         console.log(response.body.features[0].center[1]);
//    console.log(response.body.features[0].center[0]);
//     }
// });

// const geoCode = (address, cb) =>{
// const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoieWFoYyIsImEiOiJja2p2bWRkM2YyZ3RvMnprM3I1OGgwYmdjIn0.7onFIo8F0HJg2mLTCum14Q&limit=1";

// request({url: url, json: true}, (err, response) =>{
//     if(err){
//         cb("Unable to connect to location services")
//     }
//     else if (response.body.features.length === 0){ 
//         cb("Unable to connect to location services")
//     }
//     else{
//         cb(undefined, {
//             latitude: response.body.features[0].center[0],
//             longitude: response.body.features[0].center[1],
//             location: response.body.features[0].place_name
//         })
//     }
// })

// };
// when working with cb functions we pass two arguments  an err if something is wrong or data if it works only one should have a value the other should be undefined 
geoCode("Atlanta", (err, data) =>{
    console.log("Error",err)
    console.log("Data", data)

})

forecast(44.1545, -75.7088, (err, data) =>{
    console.log("Error",err)
    console.log("Data", data)

})