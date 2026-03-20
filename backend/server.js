import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Success from api"})
})

app.listen(3000,()=> console.log("Sever is running on port 3000"));
