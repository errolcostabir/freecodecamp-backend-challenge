var express=require("express");
var app=express();
require('dotenv').config();

//console.log("Hello World");

app.get('/',function(req,res){
    //res.send("Hello Express");
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/json',function(req,res){
    //res.json({"message": "Hello json"});
    //console.log(process.env.MESSAGE_STYLE);
    //var mStyle=process.env.MESSAGE_STYLE;
    var message="Hello json";
    if(process.env.MESSAGE_STYLE==='uppercase'){
        message=message.toUpperCase();
    }
    
    res.json({"message": message});
});
    
app.use('/public',express.static(__dirname+'/public'));

module.exports=app;