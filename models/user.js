const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    email: {type: String, required: true},
    major: {type: String, required: true},
    date: { type: Date, default: Date.now }
    //need books selling, books bought, books sold? probably bring this in from other database
});

const User = mongoose.model("User", userSchema);

module.exports = User;
