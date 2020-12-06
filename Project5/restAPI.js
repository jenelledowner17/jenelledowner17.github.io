//npm install express

var express = require("express")
var app = express();

//this code load the data in System as a string

const fs =require('fs')
let data= fs.readFileSync('./courses.json');

//this code converts the string to a json obejct
let course =JSON.parse(data) ;


//Define routes

//api route that returns an array of all the courses


app.get('/api',(req,res) => {

    res.json(course.courses)
})

//Route definition by course_code

app.get('/api/by_course_code/:qcode', (req,res)=>{
  let query = req.params['qcode']
  filtered_courses=course.courses.filter(q =>q.course_code.includes(query))
  let output={
    course:filtered_courses
  }
  res.json(output);
})
app.get('/api/by_title/:qtitle', (req,res)=>{
  let query = req.params['qtitle']
  filtered_courses=course.courses.filter(q =>q.title.includes(query))
  let output={
    course:filtered_courses
  }
  res.json(output);
})

//Route definition by instructor
app.get('/api/by_instructor/:qname', (req,res)=>{
  let query = req.params['qname']
  filtered_courses=course.courses.filter(q =>q.instructor.includes(query))
  let output={
    course:filtered_courses
  }
  res.json(output);
})

//Route defintion by level
app.get('/api/by_level/:qlevel', (req,res)=>{
  let query = req.params['qlevel']
  filtered_graduate=course.courses.filter(q =>
    {
      if ((q.course_level.includes("graduate")) &&! (q.course_level.includes("under")))
    {
        return true;
      }else
      return false;

    });
    filtered_undergraduate=course.courses.filter(q =>
      {
        if (q.course_level.includes("under"))
      {
          return true;
        }else
        return false;
      }
  );
  let output1={
    course:filtered_undergraduate
  }
  let output2={
    course:filtered_graduate
  }
  if(query==("undergraduate")){
      res.json(output1);
  }else {
    res.json(output2);
  }

})

//Combined route : by level and instructor
app.get('/api/combined_query/:qname/:qlevel', (req,res)=>{
  let query_name = req.params['qname']
  let query_level = req.params['qlevel']
  filtered_graduate=course.courses.filter(q =>
    {
      if ((q.course_level.includes("graduate")) &&! (q.course_level.includes("under")))
    {
      if (q.instructor.includes(query_name)){
        return true;
      }else {
        return false;
      }
    }else {
      return false;
    }
    });
    filtered_undergraduate=course.courses.filter(q =>
      {
        if ((q.course_level.includes("under")) && (q.instructor.includes(query_name)))
      {
          return true;
        }else
        return false;
      });


  let output1={
    course:filtered_undergraduate
  }
  let output2={
    course:filtered_graduate
  }
  if(query_level==("undergraduate")){
      res.json(output1);
  }else {
    res.json(output2);
  }
});

//Static files

app.use('/demo',express.static('front_end'))


//Start server
app.listen(3000,function()
{
  console.log("Server is running");
  console.log(course);
})
