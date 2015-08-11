var express = require('express');
var app = express();

// ----------- Configuration Section ---------------

var ENDPOINT = "forms"
var OUTPUT = require('./output.json');
var port = 8888

// ----------- End of configuration Section ---------------

//ipAddress = 'http://localhost:' + port

app.get('/' + ENDPOINT, function(req, res){
  res.send(OUTPUT);
});

app.listen(port);

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  var ipAddress = 'http://'+add + ':' + port
  console.log("The API is waiting for you at " + ipAddress + "/" + ENDPOINT);
})