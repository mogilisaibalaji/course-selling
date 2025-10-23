const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const app = express();

const jwt = require("jsonwebtoken");

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use()

app.listen(3000,()=>{
    console.log("The server is running in the port 3000");
});