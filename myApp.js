var express=require("express");
var app=express();
require('dotenv').config();

console.log("Hello World");

app.get('/',function(req,res){
    //res.send("Hello Express");
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/json',function(req,res){
    //res.json({"message": "Hello json"});
    if(process.env.MESSAGE_STYLE){
        res.json({"message": "HELLO JSON"});
    }
    else{
        res.json({"message": "Hello json"});
    }
});
    
app.use('/public',express.static(__dirname+'/public'));

module.exports=app;