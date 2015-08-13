var express = require('express');
var os = require('os');
var app = express();
app.disable('etag')

// ----------- Configuration Section for GET Request ---------------

/* Rename this if you want to change the name of the GET_API */
var GET_ENDPOINT = "endpoint"

/* Pointer to json file whose content has to be sent as API response */
var GET_INPUT_FILE = './get_output.json'

/* What response code you want? */
var GET_RESPONSE_CODE = 200;


// ----------- Configuration Section for POST Request ---------------

/* Rename this if you want to change the name of the POST_API */
var POST_ENDPOINT = "postendpoint"

/* Pointer to json file whose content has to be sent as API response */
var POST_INPUT_FILE = './post_output.json'

/* What response code you want? */
var POST_RESPONSE_CODE = 200;

/* Server listening port */
var PORT = 8888

// ----------- End of configuration Section ---------------

var GET_OUTPUT_JSON = require(GET_INPUT_FILE);
var POST_OUTPUT_JSON = require(POST_INPUT_FILE);


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

app.get('/' + GET_ENDPOINT, function(req, res){
  console.log("Processing you GET request ...");
  res.send(GET_RESPONSE_CODE, GET_OUTPUT_JSON);
  console.log("");
});

app.post('/' + POST_ENDPOINT, function(req, res){
  console.log("Processing your POST request ...");
  res.send(POST_RESPONSE_CODE, POST_OUTPUT_JSON);
  console.log("");
});

app.listen(PORT);
console.log("You can access GET request at http://"  + addresses[0] + ":" + PORT + "/"+ GET_ENDPOINT);
console.log("and")
console.log("You can access POST request at http://"  + addresses[0] + ":" + PORT + "/"+ POST_ENDPOINT);


