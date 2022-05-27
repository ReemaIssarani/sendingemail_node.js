const express = require("express");
const app = express();
const sendEmailRouter = require("./api/email.router");

app.get("/", (req,res)=>{
  res.json({
      success:1,
      message:"This is rest apis working"
  })
})

app.use(express.json());

app.use("/email",sendEmailRouter)

app.listen(8000,()=>{
    console.log("Server is up and running")
})