const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){res.sendFile(__dirname + "/index.html")});
app.post("/",function(req,res){
    var Num1=Number(req.body.num1);
    var Num2=Number(req.body.num2);
    var result=Num1+Num2;
    res.send("the result of calculation is "+result)});
app.get("/bmicalculator",function(req,res){res.sendFile(__dirname + "/bmicalculator.html")});
app.post("/bmicalculator",function(req,res){
    var h=parseFloat(req.body.height);
    var w=parseFloat(req.body.weight);
    var result=w/(h*h);
    res.send("your BMI is "+ result);
});
app.listen(4000,function(){console.log("server started")});