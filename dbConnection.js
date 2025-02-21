const mongoose=require("mongoose")
require('dotenv').config();

mongoose.connect("mongodb+srv://soumyakrishanan0:j84EeymqirFSqBQG@cluster0.2zlkl.mongodb.net/")
var db=mongoose.connection
db.on("error",console.error.bind("error"))
db.once("open",function(){
    console.log("connection successful")
})
 
module.exports=db
