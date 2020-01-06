const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boughtSchema = new Schema({
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

const Bought = mongoose.model("Bought", boughtSchema);

module.exports = Bought;