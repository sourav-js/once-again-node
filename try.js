require("dotenv");
var express= require("express"),
app=express();
var port= process.env.PORT ||
app.get("/",function(req,res){

	res.send("again hosted successfully")
})

app.listen(port,function(){

	console.log("srever has starteddd")
})
