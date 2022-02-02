const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = Schema
const Book = mongoose.model(
  "Book",
  new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  publish: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref:"Author"
  },
  isInStock: {
    type: String,
    required: true,
  },
})
)
module.exports = Book
