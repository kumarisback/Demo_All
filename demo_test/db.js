
const mongoose  = require('mongoose');
const uri ="mongodb+srv://koilaa:koilaa@cluster0.ctsgn0y.mongodb.net/myFirstDatabase";
const connectDB = async()=>{
  try{
      await mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify:false,useCreateIndex:true});
      console.log("mongodb connected")

  }
  catch(err){
      console.error(err.message);
      //EXIT
      process.exit(1);
  }
};

module.exports= connectDB;
