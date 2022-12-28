const express = require("express");

const app = express();

app.get("/",function(request,response){
    response.send("Hello  world this is G@mer");
})
app.get("/contact",function(request,response){
    response.send("contact me at shanmukhrahul@gmail.com");
})
app.get("/about",function(request,response){
    response.send("Nagurinchi neeku telidhu enti ea");
})
app.get("/hobbies",function(request,response){
    response.send("<ol><li>computer<li><ol>");
})

app.listen(3000,function(){
    console.log("Server has started onn the port 3000");
});

