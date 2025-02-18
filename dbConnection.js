const mongoose=require("mongoose")
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
var db=mongoose.connection
db.on("error",console.error.bind("error"))
db.once("open",function(){
    console.log("connection successful")
})
 
module.exports=db