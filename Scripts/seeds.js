const mongoose = require("mongoose");
const db = require("../models");
const userSeed = require("./data/userSeeds");
const bookSeeds = require("./data/bookSeeds");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bookexchange");

db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

db.Books
.remove({})
.then(() => db.Books.collection.insertMany(bookSeeds))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

