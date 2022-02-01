const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Book = require("./models/book");
const Author = require("./models/author");
var mongoDB = "mongodb://127.0.0.1/Amazot";
const { Schema } = mongoose;

mongoose
  .connect(mongoDB)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((e) => console.error(e));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.post("/author", (req, res) => {
    let name=req.body.name
    let adress=req.body.adress
    let phone=req.body.phone
    let isAliv=req.body.isAliv
    let birthday=req.body.birthday
    console.log(typeof(name));
    console.log(name,adress,phone,isAliv,birthday);
    let theauthor = new Author({
    name,
    adress,
    phone,
    isAliv,
    birthday
  });
  theauthor.save((err, data) => {
    console.log(err);
    console.log(data);
  });
});

// app.post("/book", (req, res) => {
//   res.send("Hello World!");
// });
