var express=require("express");
var app=express();
require('dotenv').config();

//console.log("Hello World");

app.get('/json',function(req,res){
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
});

app.get('/',function(req,res){
    //res.send("Hello Express");
    res.sendFile(__dirname+'/views/index.html');
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
});

app.get('/now',function(req,res,next){
    req.time= new Date().toString();
    //var time =new Date().toString();
    ///console.log(time);
    next();
},function(req,res){
    //console.log(time);
    res.json({"time": req.time});
});

/* app.get('/json',function(req,res){
    //res.json({"message": "Hello json"});
    //console.log(process.env.MESSAGE_STYLE);
    //var mStyle=process.env.MESSAGE_STYLE;
    var message="Hello json";
    if(process.env.MESSAGE_STYLE==='uppercase'){
        message=message.toUpperCase();
    }
    
    res.json({"message": message});
}); */
    
app.use('/public',express.static(__dirname+'/public'));

module.exports=app;