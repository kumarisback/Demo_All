const { default: mongoose } = require("mongoose");

const fileSchema = new mongoose.Schema({
  fileName: String,
});

const FileModel = mongoose.model("File", fileSchema);

const insertProduct = async (data) => {
  let product = new FileModel(data);
  let output="";
  await product.save().then((response) => {
    console.log(response);
    output= response;
  });
  return output
};

const getProduct = async (id) => {
    let product =await  FileModel.findById(id);
    return product;
  };
  
  const getAllProduct = async (id) => {
    let product =await  FileModel.find()
    return product;
  };
module.exports = { insertProduct, getProduct,getAllProduct };

