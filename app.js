$( document ).ready(function() {
$("#form1").submit(function(event){
    event.preventDefault();

    let pagenumber=$("#pageno").val();

    searchpageno(pagenumber);


})

$("#pageno").change(function(){
    let pagenumber=$("#pageno").val();
    searchpageno(pagenumber); 
})


$("#form2").submit(function(event){
    event.preventDefault();

    let username=$("#uname").val();

    searchUsername(username);


})

/*
$("#uname").change(function(){
    let username=$("#uname").val();
    searchUsername(username); 
})*/

    



});







let searchpageno=(pagenumber=>{
    $("#finalout").empty();
    $.get("https://api.github.com/users?since="+ pagenumber,function(data){
        //console.log(data);
        //console.log(data[0].avatar_url);
        for (var i=0; i<data.length;i++){
            user=`<a target=_blank" class="item" href="${data[i].html_url}"><img class="searchpage" width="100" height="100"  src="${data[i].avatar_url}"/>UserName: ${data[i].login}</a>  `
            
                       /*console.log(user);*/
            /*console.log(name);*/
            //let nameElement = document.createElement("p");
            //nameElement.innerText = `User Name: ${data[i].login}`;
            //nameDiv.append(nameElement);

            $("#finalout").append(user);
           // $("#finalout").append(nameElement);
        

            
            
        }
        $('.demo').rpmPagination({
            domElement: '.item',
            limit: 3

          });
        

    } )

})
let nameDiv = document.querySelector("#nameres");

let searchUsername=(username=>{
    $("#nameres").empty();
    $.get("https://api.github.com/users/"+username ,function(info){
        //console.log(info);
        //console.log(info.login);
            
            user=`<h1><a target=_blank" href="${info.html_url}"><img class="searchimg"  width="100" height="100"  src="${info.avatar_url}"/></a>---${info.login} is the searched user</h1> `
            //console.log(user);
            let nameElement = document.createElement("p");
            nameElement.innerText = `UserName: ${info.login}`;
            nameElement.style.fontSize="20px";
            $("#nameres").append(user);
            
            nameDiv.append(nameElement);
            
    } )
})
