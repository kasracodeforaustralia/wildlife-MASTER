
var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/public/css', express.static('public/css'));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log('home page is showing now!')
});
app.get('/register',function(req, res){
  res.sendFile(__dirname + '/reg.html');
  console.log('This is registration page!')
});

console.log('app is listening!');
app.listen(3000);
