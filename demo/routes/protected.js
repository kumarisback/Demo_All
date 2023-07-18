const express = require('express');
const product = require('../model/product');
// const require = require("../model/")
var router = express.Router();

router.get("/",async (req,res)=>{
 
    return res.send( {message:"I'm protected one"});
})

module.exports=router;