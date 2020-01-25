const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    // owner -- will need to connect to the user table.
    title: { type: String, required: true },
    author: { type: Array, required: true },
    image: {type: String, required: true},
    isbn: { type: String},
    published: { type: Number},
    edition: { type: Number},
    condition: {type: String, required: true},
    subject: {type: String, required: true},
    ownerEmail: {type: String, required: true},
    date: { type: Date, default: Date.now },
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;