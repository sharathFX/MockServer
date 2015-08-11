var express = require('express');
var app = express();

// ----------- Configuration Section ---------------

/* Rename this if you want to change the name of the API */
var ENDPOINT = "endpoint"

/* Pointer to json file whose content has to be sent as API response */
var INPUT_FILE = './output.json'

/* Server listening port */
var PORT = 8888

// ----------- End of configuration Section ---------------

var OUTPUT_JSON = require(INPUT_FILE);

app.get('/' + ENDPOINT, function(req, res){
  console.log("Processing you request ...");
  res.send(OUTPUT_JSON);
  //console.log(OUTPUT_JSON);
  console.log("");
});

app.listen(PORT);

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  var ipAddress = 'http://'+add + ':' + PORT
  console.log("The API is waiting for you at " + ipAddress + "/" + ENDPOINT);
})