

var updateView = async (button)=>{
  if (button.dataset.querytype == 'by_title'){
    let query = document.getElementById("#titleQuery").value;
    let api = `https://localhost:3000/api/by_course_code/${query}`
}
else if(button.dataset.querytype == 'by_instructor'){
  let query = document.getElementById("#NameQuery").value;
  let api = `https://localhost:3000/api/by_instructor/${query}`
}
else if(button.dataset.querytype == 'by_level'){
  let query = document.getElementById("#levelQuery").value;
  let api = `https://localhost:3000/api/by_level/${query}`
}
else if(button.dataset.querytype == 'combined_query'){
  let querylevel = document.getElementById("#levelQuery").value;
  let queryname = document.getElementById("#InNameQuery").value;
  let api = `https://localhost:3000/api/combined_query/${querylevel}/${queryname}`
}
  const data = await fetch (api);
  const model = await data.json();
  render_view(model);
}

var render_view =(model) =>{
  var source = document.querySelector("#display_query_view").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(model);
  document.querySelector("#display_courses").innerHTML= html;
  console.log('view is being rendered');
}
