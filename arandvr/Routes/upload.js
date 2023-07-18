const express = require("express");
const multer = require("multer");
const { insertProduct,getAllProduct, getProduct } = require("../Schema/FileModel");
const { log } = require("console");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid").v4;

const route = express.Router();

const middleware = () => {
  const upload = multer({
    storage: multer.diskStorage({
      destination: "product-data/images",
      filename: function (req, file, cb) {
        cb(null, uuid() + "-" + file.originalname);
      },
    }),
  });

  const configMulterMiddleware = upload.single("file");

  return configMulterMiddleware;
};

route.post("/upload", middleware(), async (req, res) => {
  let product = {
    fileName: req.file.path,
  };

  responseData = await insertProduct(product);

  res.send({ message: "Uploaded successfully", product: responseData });
});

route.get("/retrive/:id", async (req, res) => {
  console.log(req.params);
  let id = req.params.id;
  let product = await getProduct(id);
  const glbData = fs.readFileSync(path.resolve(product.fileName));

  res.send(glbData);
});

route.get("/all", async (req, res) => {
  let product = await getAllProduct();
  res.send(product);
});

module.exports = { route };
