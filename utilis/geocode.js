const request = require("request");

const geoCode = (address, cb) =>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoieWFoYyIsImEiOiJja2p2bWRkM2YyZ3RvMnprM3I1OGgwYmdjIn0.7onFIo8F0HJg2mLTCum14Q&limit=1";
    
    request({url: url, json: true}, (err, response) =>{
        if(err){
            cb("Unable to connect to location services")
        }
        else if (response.body.features.length === 0){ 
            cb("Unable to connect to location services")
        }
        else{
            cb(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
    
    };
    // when working with cb functions we pass two arguments  an err if something is wrong or data if it works only one should have a value the other should be undefined 
    geoCode("Atlanta", (err, data) =>{
        console.log("Error",err)
        console.log("Data", data)
    })

        module.exports = geoCode;