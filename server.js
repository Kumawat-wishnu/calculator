const express= require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){res.sendFile(__dirname + "/bmicalculator.html")});
app.post("/",function(req,res){
    var h=req.body.height;
    var w=req.body.weight;
    var result=w/(h*h);
    res.send("your BMI is "+ result);
})
app.listen(3000,function(){console.log("server started on port 3000")});