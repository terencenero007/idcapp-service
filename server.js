// Initialize express
var express = require('express');
var app = express();

// Load configuration
var nconf = require('nconf');
nconf.env()
   .file({file: './config.json'});

// ping API
app.get('/ping', function (req, res) {
  res.send('Hello World');
});

abc........

// Listen http server on configured  port
app.listen(process.env.PORT || nconf.get('NODE_SERVER_PORT'), function () {
  console.log('Hello World app listening on port ' + nconf.get('NODE_SERVER_PORT'));
});
