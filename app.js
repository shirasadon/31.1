const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const { getAllBooks, addingBooks } = require("./controler/bookControler");
const { getAllAuthors, addingAuthors } = require("./controler/authorControler");
const mongoDB = "mongodb://127.0.0.1/Amazot";
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
  addingAuthors(
    req.body.name,
    req.body.adress,
    req.body.phone,
    req.body.isAliv,
    req.body.birthday
  )
    .then((theauthor) => res.json(theauthor))
    .catch((err) => res.json(err));
});

app.post("/book", (req, res) => {
  addingBooks(
    req.body.name,
    req.body.publish,
    req.body.date,
    req.body.author,
    req.body.isInStock
  )
    .then((thebook) => res.json(thebook))
    .catch((err) => res.json(err));
});

app.get("/books", (req, res) => {
  getAllBooks()
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});

app.get("/author", (req, res) => {
  getAllAuthors()
    .then((author) => res.json(author))
    .catch((err) => res.json(err));
});
app.put("/book/:bookById", (req, res) => {
  let theid = req.body.bookById;
  Book.findByIdAndUpdate(
    theid,
    {

      $set: {
        name: req.body.name,
        publish: req.body.publish,
        date: req.body.date,
        author: req.body.author,
        isInStock: req.body.isInStock,
      },
    }
//     function theupdateclient(err,data){
// if(err){
//     console.log(err);
// }else{
//     console.log(JSON.parse(data));
// }
//     }
 );
 
 });
