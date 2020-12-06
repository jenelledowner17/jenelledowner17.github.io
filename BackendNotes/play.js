//play.js

//Require express library
var express = require ('express');

//Create an instance of express server.
var app = express();

//Define route
app.get('/', function (req,res){
  res.send('<h1>Hello World!<h1>');
});

//Defining a route using the arrow funtion
//Notice there was no need to define function
app.get('/login',(req,res)=>{
  res.send('<h2>This is the login route</h2>')
});

//Creates a fake api using json object
app.get('/api/quiz',(req,res)=>{
  var quiz ={
    q1: "What is 1+1",
    a1:2
  }
  res.json(quiz);

});

// 
app.get('/flights/', function(res,req){
  res.send(req.params)

});

//Start a server
app.listen(3000,function(){
  console.log('Example app listening on port 3000');
});
