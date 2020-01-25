const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    zipCode: {type: String, required: true},
    major: {type: String, required: true},
    email: {type: String, required: true,
    validator: function(v, cb) {
        User.find({email: v}, function(err,docs){
           cb(docs.length == 0);
        });
      },
      message: 'User already exists!',
    },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
    //need books selling, books bought, books sold? probably bring this in from other database
});
console.log("before model")
const User= mongoose.model("User", UserSchema);



module.exports = User;
