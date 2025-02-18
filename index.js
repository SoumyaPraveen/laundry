const express=require('express')
const bodyParser=require('body-parser')
const db=require('./dbConnection')
const app=express()
const cors=require('cors')
require('dotenv').config();
const port = process.env.PORT || 3000;
const path=require('path')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static( `${__dirname}/upload`));

app.use(cors())
const route=require('./routes')
app.use('/laundry_api',route)

app.listen(4047,()=>{
    console.log("Server created successfully at 4000");
})