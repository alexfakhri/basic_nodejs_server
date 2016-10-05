'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.get('/', function(request, response) {
  response.render('index')
});

app.get('/about', function(request, response) {
  response.send('Hello World!!');
});

app.listen(3000, function(){
  console.log("App listening on port 3000");
});
