const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findOne: function (req, res) {
  //   db.User
  //     .findOne({ email: req.body.email })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(res.status(422).json(err));
  // },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => console.log(res.json(dbModel)))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
