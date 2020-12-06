
//npm install express

var express = require("express")
var app = express();

//this code load the data in System as a string

const fs = require ('fs')
let rawdata= fs.readFileSync('./db.json');

//this code converts the string to a json obejct
let employee = JSON.parse(rawdata);


//Define routes

//api route that returns an array of all the employees

app.get('/api', (req,res)=>{
  let outputJOSON ={
    employees:employee["data"]
  }
  res.json(outputJSON);
})

// route that queries a substring and returns that data
//this is explained at 18:11 on video
app.get('/api/by_name/:qname',(req,res)=>{
  let query = req.params['qname']
  filtered_employees = employee["data"].filter(q => q.employee_name.includes(query))
  let outputJSON = {
    employees : filtered_employees
  }
  res.json(outputJSON);
})

//route fiters by age
//filters based on two conditions
//explained at 30:36
app.get('/api/by_age/:start_age/:end_age',(req,res)=>{
  let start_age = req.params['start_age']
  let end_age = req.params['end_age']
  filtered_employees = employee["data"].filter(
    q =>{
      if ((q.employee_age>parseInt(start_age)) && (q.employee_age<parseInt(end_age))){
        return true;
      }
      return false;
    }
  );
  let outputJSON={
    employees: filtered_employees
  }
  res.json(outputJSON);
})

//serving static files
app.use('/demo', express.static('front_end'))


app.get('/', (req, res) =>{
  res.send('<h1>This is our REST API main page </h1>')
});

//Start server
app.listen(3000,function()
{
  console.log("Server is running");
  //console.log(employee);
})
