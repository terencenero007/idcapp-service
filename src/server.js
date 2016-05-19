/**
 * This file is the entry point to the idcapp-service applicaion
 * Creates express server, load configuration, define APIs etc. takes place here 
 */

// Initialize express
var express = require('express');
var app = express();

// Load configuration
var nconf = require('nconf');
nconf.env()
  .file({ file: __dirname + '/config.json' });

// Load services
var myMath = require('./myMath');
var messageService = require('./services/messageService');

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// default GET API
app.get('/', function (req, res) {
  res.send('IDC App is up...');
});

// ping API
app.get('/ping', function (req, res) {
  res.send('Hello World...');
});

// API to add two numbers
app.get('/add/:number1/:number2', function (req, res) {
  var number1 = parseInt(req.params.number1);
  var number2 = parseInt(req.params.number2);

  res.send(number1 + ' + ' + number2 + ' equal to ' + new myMath().add(number1, number2));
});

// API to sub two numbers
app.get('/sub/:number1/:number2', function (req, res) {
  var number1 = parseInt(req.params.number1);
  var number2 = parseInt(req.params.number2);

  res.send(number1 + ' - ' + number2 + ' equal to ' + new myMath().sub(number1, number2));
});

// API to get messages
app.get('/messages', function (req, res) {
  return res.json(messageService.getMessages());
});

// Listen http server on configured  port
app.listen(nconf.get('PORT'), function () {
  console.log('Hello World app listening on port ' + nconf.get('PORT'));
});
