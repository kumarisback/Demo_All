
const mongoose  = require('mongoose');
const uri = 'mongodb+srv://koila:koilaa@cluster0.ctsgn0y.mongodb.net/';
const db = async()=>{
  try{
      await mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true});
      console.log("mongodb connected")

  }
  catch(err){
      console.error(err.message);
      process.exit(1);
  }
};

module.exports= db;