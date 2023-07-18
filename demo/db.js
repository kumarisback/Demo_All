
const mongoose  = require('mongoose');
const uri = 'mongodb+srv://koila:koilaa@cluster0.ctsgn0y.mongodb.net/';
const connectDB = async()=>{
  try{
    // , useFindAndModify:false,useCreateIndex:true
      await mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true});
      console.log("mongodb connected")

  }
  catch(err){
      console.error(err.message);
      //EXIT
      process.exit(1);
  }
};

module.exports= connectDB;
