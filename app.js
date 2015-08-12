var express = require('express');
var os = require('os');
var app = express();
app.disable('etag')

// ----------- Configuration Section ---------------

/* Rename this if you want to change the name of the API */
var ENDPOINT = "endpoint"

/* Pointer to json file whose content has to be sent as API response */
var INPUT_FILE = './output.json'

/* Server listening port */
var PORT = 8888

/* What response code you want? */
var RESPONSE_CODE = 200;

// ----------- End of configuration Section ---------------

var OUTPUT_JSON = require(INPUT_FILE);


var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
//console.log(addresses);

app.get('/' + ENDPOINT, function(req, res){
  console.log("Processing you request ...");
  res.send(RESPONSE_CODE, OUTPUT_JSON);
  console.log("");
});

app.listen(PORT);
console.log("The API is waiting for you at http://"  + addresses[0] + ":" + PORT + "/"+ ENDPOINT);

