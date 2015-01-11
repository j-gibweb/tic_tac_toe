var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(path.join(__dirname, 'bower_components')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/tic_tac_toe.html");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('shh, im working over here...')
});