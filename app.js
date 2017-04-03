var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index1.html');
});

app.get('/contact', function(req, res){
  res.send('Contacts ----__________----');
});

app.listen(3000);

