const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellingSchema = new Schema({
    // owner -- will need to connect to the user table.
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: Number, required: true },
    published: { type: Number},
    edition: { type: Number},
    condition: {type: String, required: true},
    subject: {type: String, required: true},
    date: { type: Date, default: Date.now },
    sold: {type: Boolean, default: false}
});

const Selling = mongoose.model("Selling", sellingSchema);

module.exports = Selling;