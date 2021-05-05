const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new mongoose.Schema({
  authors: [String],

  description: {
    type: String,
  },
 
  image: {
    type: String,
  },

  link: {
      type: String,
  },

  title: {
      type: String
  }

});

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;
