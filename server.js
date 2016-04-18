// Initialize express
var express = require('express');
var app = express();

// Load configuration
var config = require('./config.json');

// ping API
app.get('/ping', function (req, res) {
  res.send('Hello World');
});

// Listen http server on configured  port
app.listen(process.env.PORT || config.PORT, function () {
  console.log('Hello World app listening on port 3000');
});
