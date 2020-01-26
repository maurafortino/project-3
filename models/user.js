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
});

// UserSchema.methods.generateHash = function(password){
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// }

// UserSchema.methods.validPassword = function(password){
//   return bcrypt.compareSynce(password, this.password)
// }

const User= mongoose.model("User", UserSchema);



module.exports = User;
