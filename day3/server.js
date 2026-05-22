const express= require("express");
const app=express();
const mongoose=require("mongoose");
require("dotenv").config();
const port=process.env.port

app.use(express.json());

mongoose.connect(process.env.mongo.url)
.then(()=>{
    console.log("mongoose is successfully connected");
    app.listen(5000,() => {
console.log ("server is running is port number $(port)");
});
})
.catch((e) =>{
    console.log("something went wrong",e);
});
