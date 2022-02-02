const Author = require("../models/author");
const Book = require("../models/book");

const getAllBooks = () => {
  return new Promise((resolve, reject) => {
    Book.find()
      .then((books) => resolve(books))
      .catch((err) => reject(err));
  });
};

const addingBooks = (name="",publish="",date="",author="",isInStock="") => {
  return new Promise((resolve, reject) => {
    let thebook = new Book({
      name,
      publish,
      date,
      author,
      isInStock,
    });
    thebook.save((err, thebook) => (err ? reject(err) : resolve(thebook)));
  });
};








exports.getAllBooks = getAllBooks;
exports.addingBooks = addingBooks;
