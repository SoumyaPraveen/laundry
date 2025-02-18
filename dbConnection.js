const mongoose=require("mongoose")
require('dotenv').config();

mongoose.connect("mongodb://127.0.0.1:27017/laundry")
var db=mongoose.connection
db.on("error", console.error.bind(console, "connection error:")); 
db.once("open",function(){
    console.log("connection successful")
})
 
module.exports=db
