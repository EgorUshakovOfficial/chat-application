let myFunction = ()=>{
  var filter, users; 
  filter = $("#search-bar").val();
  users  = $(".chat-users").children();
  for (let i=0; i<users.length; i++){
    let useri = users[i];
    let text = $(useri).find("p").text();
    if (text.indexOf(filter) > -1){
      $(useri).css("display", ""); 
    }
    else{
      $(useri).css("display", "none");
    }
  }
}