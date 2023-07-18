const express = require('express');
// const require = require("../model/")
var router = express.Router();

router.get("/",async (req,res)=>{
 
    return res.send( {message:"I'm protected one"});
})

module.exports=router;