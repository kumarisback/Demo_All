const express = require("express");
const db = require("./db.js");
const cors = require('cors');
const FileModel = require("./Schema/FileModel.js");
const multer = require('multer');
const bodyParser = require("body-parser");
const { route } = require("./Routes/upload.js");
const upload = multer();



db();

const app = express();

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );


app.use(cors());

app.use('/', route);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
