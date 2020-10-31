
function quizSelection(){
    //var user = document.getElementById('user-name').value;
    //document.getElementById('your-name').innerHTML="Student Name: "+user;
    var intro =document.getElementById('intro');
    intro.classList.add('hide');
    var quizOptions=document.getElementById('quiz_list');
    quizOptions.classList.remove('hide');

}
var container =document.getElementById('container');
var question =document.getElementById('card-text');
var aBtn =document.getElementById('btn1');
var bBtn =document.getElementById('btn2');
var cBtn =document.getElementById('btn3');
const questionElement=document.getElementById('questions');
const answerElement =document.getElementById('answerbtn');
let Questionindex;

function startQuiz1(){
    var quizOptions=document.getElementById('quiz_list');
    quizOptions.classList.add('hide');
    console.log("I work!");
    let index =0;
    if(index<=quiz1.length){
    quiz1.forEach(index => {
        quiz1_render_view(quiz1_view,index)
        index++
    });
    }else
    scoreBoard()

}

function startQuiz2(){
    var quizOptions=document.getElementById('quiz_list');
    quizOptions.classList.add('hide');
    console.log("I work!");
    let index =0;
    if(index<=quiz2.length){
    quiz2.forEach(index => {
        quiz2_render_view(quiz2_view,index)
        index++
    });
    }else
    scoreBoard()

}
function scoreBoard(){
    var user = document.getElementById('user-name').value;
    document.getElementById('your-name').innerHTML="Student Name: "+user;
}
//submitbtn.addEventListener('click,showResults1');
const quiz1=[
 {
    questions: "Process of understand how an information system can support business needs, design the system, build it and deliver it to users",
    answers:{
        a:"Sytems Development Life Cycle",
        b: "System request",
        c:"Project Plan"

    },
    correctAnswer:'a'
},
{
    questions: "Person that identifies opportunities for improvements and designs an information sys to implement them",
    answers:{
        a:"Systems analyst",
        b:"Data analyst",
        c:"Project sponsor"

    },
    correctAnswer:'a'
},
{
    questions: "Primary goal of systems analyst",
    answers:{
        a:"Create value for the organization",
        b:"Planning, analysis, design, and implementation",
        c:"System request"

    },
    correctAnswer:'a'
},

{
    questions: "Person that identifies opportunities for improvements and designs an information sys to implement them",
    answers:{
        a:"Systems analyst",
        b:"Data analyst",
        c:"Project sponsor"

    },
    correctAnswer:'a'
},
{
    questions: "Primary goal of systems analyst",
    answers:{
        a:"Design",
        b:"Create value for the organization",
        c:"Project sponsor"

    },
    correctAnswer:'b'
},
{
    questions: "When is the system specification developed?",
    answers:{
        a:"Design",
        b:"Analysis Phaset",
        c:"Planning Phase"

    },
    correctAnswer:'a'
},
{
    questions: "Understanding why an information system should be built and determining how the project team will build it",
    answers:{
        a:"System request",
        b:"Phased development",
        c:"Planning phase"

    },
    correctAnswer:'c'
},
{
    questions: "Characteristics of Object Oriented Approach to SW Developement",
    answers:{
        a:"use-case driven",
        b:"architecture-centric",
        c:"all of the above"

    },
    correctAnswer:'c'
},
{
    questions: "basic character of object oriented systems",
    answers:{
        a:"Polymorphism",
        b:"Inheiritance",
        c:"Dynamic binding"

    },
    correctAnswer:'b'
},
{
    questions: "A consistent notation, integration among the diagramming techniques and application of diagrams across entire dev process",
    answers:{
        a:"Project plan",
        b:"UML",
        c:"Project sponsor"

    },
    correctAnswer:'b'
},
{
    questions: "Makes polymorphism possible",
    answers:{
        a:"Dynamic binding",
        b:"Inheiritance",
        c:"Agile"

    },
    correctAnswer:'a'
},
{
    questions: "teams organize themselves in a symbiotic manner & set their own goals for each sprint",
    answers:{
        a:"SCRUM",
        b:"Project teams",
        c:"Inception team"

    },
    correctAnswer:'a'
},
{
    questions: " A structured design methodology that proceeds in a sequence from one phase to the next",
    answers:{
        a:"Implementation Phase",
        b:"Process-centered methodology",
        c:"Phased development"

    },
    correctAnswer:'c'
},
{
    questions: "When is the system actually built or purchased?",
    answers:{
        a:"Analysis Phase",
        b:"Implementation Phase",
        c:"Design Phase"

    },
    correctAnswer:'b'
},
{
    questions: "",
    answers:{
        a:"",
        b:"",
        c:""

    },
    correctAnswer:''
},
{
    questions: "Document that describes how the project team will go about developing the proposed system",
    answers:{
        a:"Project Plan",
        b:"Systems Development Life Cycle",
        c:"System request"

    },
    correctAnswer:'a'
},
{
    questions: "A set of interrelated components that function together to achieve a common goal.",
    answers:{
        a:"Prototyping",
        b:"Subsytems",
        c:"System"

    },
    correctAnswer:'c'
},
{
    questions: "The output of the systems planning phase is a ",
    answers:{
        a:"Systems Planning",
        b:"Feasibility report",
        c:"Document"

    },
    correctAnswer:'b'
},
{
    questions: "The output of the systems analysis phase is a:",
    answers:{
        a:"Feasibility report",
        b:"System requirement document or system proposal",
        c:"Systems Design"

    },
    correctAnswer:'b'
},
{
    questions: "The output of the systems design phase is:",
    answers:{
        a:"Design Specification or Functional Specification",
        b:"System request",
        c:"Project plan"

    },
    correctAnswer:'a'
},


];

var quiz2=[

{
    questions: "Another name for raw facts is ",
    answers:{
        a:"Metadata",
        b:"Raw data",
        c:"Information"

    },
    correctAnswer:'b'
},
{
    questions: "A multiuser database that supports a relatively small number of users (usually less than 50) or a specific department within an organization",
    answers:{
        a:"Workgroup",
        b:"Database management system",
        c:"Business Intelligence"

    },
    correctAnswer:'a'
},
{
    questions: " A database designed to support a company's day-to-day operations.",
    answers:{
        a:"Analytical database",
        b:"OLAP",
        c:"Operational Database"

    },
    correctAnswer:'c'
},
{
    questions: "A comprehensive approach to capture and process business data with a purpose of generating information to support business decision making.",
    answers:{
        a:"Workgroup",
        b:"Database management system",
        c:"Business Intelligence"

    },
    correctAnswer:'c'
},
{
    questions: "Creates a relationship between the data that is in the database.",
    answers:{
        a:"Analytical database",
        b:"Rational Databases",
        c:"Operational Database"

    },
    correctAnswer:'b'
},
{
    questions: "How are elements stored in a database",
    answers:{
        a:"tables",
        b:"fields",
        c:"schdueles"

    },
    correctAnswer:'a'
},
{
    questions: "Name the database that has no requirements",
    answers:{
        a:"Unstructured databases",
        b:"Structured databases",
        c:"Rational Databases"

    },
    correctAnswer:'a'
},
{
    questions: "Anything recorded such as observations and facts",
    answers:{
        a:"data",
        b:"database",
        c:"data warehouse"

    },
    correctAnswer:'a'
},
{
    questions: "The art and science of discovering useful innovative patterns from data. ",
    answers:{
        a:"data visualization",
        b:"descriptive analytics",
        c:"data mining"

    },
    correctAnswer:'c'
},
{
    questions: "Uses optimization and simulation to ask",
    answers:{
        a:"predictive analytics",
        b:"prescriptive analytics",
        c:"diagnostic analytics"

    },
    correctAnswer:'b'
},
{
    questions: "Examines data to answer",
    answers:{
        a:"predictive analytics",
        b:"prescriptive analytics",
        c:"diagnostic analytics"

    },
    correctAnswer:'c'
},
{
    questions: "Uses statistical models and forecasts to ask",
    answers:{
        a:"predictive analytics",
        b:"prescriptive analytics",
        c:"diagnostic analytics"


    },
    correctAnswer:'a'
},
{
    questions: "Type of data source in a data warehouse",
    answers:{
        a:"Unstructured databases",
        b:"Structured databases",
        c:"Rational Databases"

    },
    correctAnswer:'b'
},
{
    questions: "Data brought to the same format as the central table and loaded into the data warehouse",
    answers:{
        a:"transformed",
        b:"extraction",
        c:"loading"

    },
    correctAnswer:'c'
},
{
    questions: "Data should be aligned by key fields and integrated into a single data set. cleaned and rolled up.",
    answers:{
        a:"transformed",
        b:"extraction",
        c:"loading"

    },
    correctAnswer:'a'
},
{
    questions: "Data should be extracted from the operational (transactional) database on a regular basis transformed",
    answers:{
        a:"transformed",
        b:"extraction",
        c:"loading"
    },
    correctAnswer:'b'
},
{
    questions: "Output of data that is a tree like graph or model of decisions and their possible outcomes",
    answers:{
        a:"decision tree",
        b:"regression model",
        c:"cluster analysis"

    },
    correctAnswer:'a'
},
{
    questions: "Output of data which has computing systems with nodes that mimic the brain.",
    answers:{
        a:"decision tree",
        b:"artificial neural networks",
        c:"cluster analysis"

    },
    correctAnswer:'b'
},
{
    questions: "Output of data that models the relationships between variables. ",
    answers:{
        a:"decision tree",
        b:"artificial neural networks",
        c:"regression model"

    },
    correctAnswer:'c'
},
{
    questions: "data warehouse contains rolled up data at the right level for queries and analysis.",
    answers:{
        a:"summarized design",
        b:"nonvolatile design",
        c:"time variant design"

    },
    correctAnswer:'a'
},


];

var quiz1_render_view = (_quiz1_view, quiz1_index)=>{

    console.log("Rendering View");
    var quizOptions=document.getElementById('quiz_list');
    quizOptions.classList.add('hide');
     var source = document.getElementById('quiz1_view').innerHTML;
    var template = Handlebars.compile(source);
     var html = template(quiz1[quiz1_index]);
    document.querySelector("#view_widget").innerHTML = html;
  }
  var quiz2_render_view = (_quiz2_view, quiz2_index)=>{

    console.log("Rendering View");
    var quizOptions=document.getElementById('quiz_list');
    quizOptions.classList.add('hide');
     var source = document.getElementById('quiz2_view').innerHTML;
    var template = Handlebars.compile(source);
     var html = template(quiz2[quiz2_index]);
    document.querySelector("#view_widget").innerHTML = html;
  }
