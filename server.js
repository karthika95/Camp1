var express = require('express');
var app= express();
var http = require('http').Server(app);

app.use(express.static('./public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/test.html')});

app.get('/hi', function(req, res){
  res.send('<h1>Hello world</h1>');
});


app.get('/home', function(req, res){
  res.send('<h1>Good afternoon</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});