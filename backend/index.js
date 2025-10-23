const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());


app.post("/user/signup" ,(req,res)=>{

});
app.post("/user/signin",(req,res)=>{

});

app.post("/user/purchases",(req,res)=>{

});

app.get("/course/purchase",(req,res)=>{

});

app.get("cources",(req,res)=>{

});

app.listen(3000,()=>{
    console.log("The server is running in the port 3000");
});