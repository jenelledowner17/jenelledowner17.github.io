

var updateView = async (button)=>{
  if (button.dataset.querytype == 'by_code'){
    let query = document.querySelector("#codeQuery").value;
     api = `http://localhost:3000/api/by_course_code/${query}`;
}
else if(button.dataset.querytype == 'by_title'){
  let query = document.querySelector("#titleQuery").value;
   api = `http://localhost:3000/api/by_title/${query}`
}
else if(button.dataset.querytype == 'by_instructor'){
  let query = document.querySelector("#NameQuery").value;
   api = `http://localhost:3000/api/by_instructor/${query}`
}
else if(button.dataset.querytype == 'by_level'){
  let query = document.querySelector("#levelQuery").value;
   api = `http://localhost:3000/api/by_level/${query}`
}
else if(button.dataset.querytype == 'combined_query'){
  let querylevel = document.querySelector("#levelQuery").value;
  let queryname = document.querySelector("#InNameQuery").value;
   api = `http://localhost:3000/api/combined_query/${querylevel}/${queryname}`
}
  const data = await fetch (api);
  const model = await data.json();
  render_view(model);
}

var render_view =(model) =>{
  var source = document.querySelector("#display_query_view").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(model);
  document.querySelector("#display").innerHTML= html;
  console.log('view has been rendered');
}
