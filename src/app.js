const express = require("express");
const app = express();


app.get("/home",function(req,res){

    res.status(200).json({
        status:200,
        message:"Welcome to Mars"
    })
})

app.listen(3000,()=>{
    console.log("App is running on port 3000");
})

