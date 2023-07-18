var express = require('express');
var router = express.Router();
const utils = require('../utils');
const Apartment = require('../model/apartment');

router.post('/',async  (req, res )=>  {
 
  // First Validate The Request
  // Check if this user already exisits
  console.log(req.body);
  try {

      post = new Apartment({
          owner: req.body.owner,
          size: req.body.size,
          rooms: req.body.rooms,
          address: req.body.address,
          rent: req.body.rent,
          security: req.body.security,      
          
      });
     await post.save()
 .then(item => {
  
 res.status(200).send({message:"Item saved to database"});
 })
 .catch(err => {
   console.log(err);
 res.status(400).send("unable to save to database");
 });
  }
   catch (error) {
    console.log("error"  )
  }
  
});


router.get('/appartment',async  (req, res )=>  {
 
  // First Validate The Request
  // Check if this user already exisits
  console.log(req.body);
  try {

    data= await Apartment.find({});
     
    //  console.log(data)
     res.status(200).send({message:"got data",data:data});
  }
   catch (error) {
    console.log("error3"  )
  }
  
});

router.post('/interest',async  (req, res )=>  {
 
  // First Validate The Request
  // Check if this user already exisits
  // console.debug(req.body.id);
  let email=req.body.user.email;
  try {

    // console.log("-------------"+req.body.id)
    // data= await User.find({email:email});
    let doc1 = await Apartment.find({"_id":req.body.id});


    // console.log("----"+JSON.stringify(req.body.user))
    let arr=  doc1[0].interested
    if(arr == null){
      arr=[]
    }
    arr.push(req.body.user)
    
     console.log(arr)

     console.log("----=======")
    let doc2 = await Apartment.findOneAndUpdate({_id:req.body.id}, {$set:{"interested":arr}});
    console.log("----"+doc2)
     res.status(200).send({message:"updated successfully"});
  }
   catch (error) {
    console.log("error")
  }
  
});


router.get('/list', async  (req, res )=>  {
 
  
  // let email=req.body.email;
  // console.log(req.query)
  try {

 
    let response = await Apartment.find({"owner":req.query.email}).populate("interested");
// console.log( response)

      res.status(200).send(response[0].interested);
  }
   catch (error) {
    console.log("error11")
  }
  
});



module.exports = router;