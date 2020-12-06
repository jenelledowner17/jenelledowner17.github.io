//simple counters to keep track of hires and fires
const appState ={
  current_view : 'intro',
  current_hire: 0,
  current_fire:0
}

document.addEventListener('DOMContentLoaded', ()=>{
    //widget_html = render_view("#post_view2");
    //document.querySelector("#app_widget").innerHTML = widget_html;
    create_user_view(1)
    //event delegation; to delegate an event within a template you must anchor
    // an event delegator to a part of your html code (parent) in this case the
    //div property with id: app widget.
    document.querySelector("#app_widget").onclick =(e) =>{
      handle_vote(e)
    }
});

//event handler
const handle_vote = (e) =>{
  console.log(e.target)
  if (e.target.dataset.vote =="hire"){
    appState.current_hire+=1
    create_user_view(1)
  }else if (e.target.dataset.vote =="fire"){
    appState.current_fire+=1
    create_user_view(1)
  }
  if ((appState.current_hire-appState.current_fire)<0){
    console.log("Restart")
    appState.current_hire =0;
    appState.current_fire=0;
  }
}


//asynchroous network request using randomuser generator
const create_user_view = async (user_idx) =>{
  //const data = await fetch ("https:jsonplaceholder.typicode.com/photos/1")
  const data = await fetch ("https://randomuser.me/api/?results=1")
  const model = await data.json()
  const html_element =  render_widget(model,"#user_view")
  document.querySelector("#app_widget").innerHTML= html_element;
}

//this function renders the model and the view
const render_widget = (model, view)=>{
  template_source = document.querySelector(view).innerHTML
  //console.log(template_source)
  //handlebars compiles the above sourece into a templates
  var template = Handlebars.compile(template_source);
  //apply the model to the template

  console.log(model)
  var html_widget_element =template ({...model,...appState})
  //var html_widget_element =template (model)

return html_widget_element
}
