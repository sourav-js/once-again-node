var express= require("express"),
app=express();

app.get("/",function(req,res){

	res.send("again hosted successfully")
})

app.listen(4444,function(){

	console.log("srever has starteddd")
})