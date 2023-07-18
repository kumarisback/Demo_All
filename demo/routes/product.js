const express = require('express');
const product = require('../model/product');
// const require = require("../model/")
var router = express.Router();

router.get("/",async (req,res)=>{

    let data=await product.find();


    // i have below line to add this data to mongo 
    // let response=await fetch("https://fakestoreapi.com/products");

    
    // let data= await response.json();
    // console.log(data);
    // data.forEach(async per => {
    //    let p= new Product({
    //         title:per.title,
    //           description: per.description,
    //           id: per.id,
    //           image:per.image,
    //           price:per.price,
    //           rate: per.rating.rate,
    //           count:per.rating.count,
    //     });
    //     await p.save();

    // });

    return res.send( data);
})

module.exports=router;