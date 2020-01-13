const Strategy = require('passport-local').Strategy;
const userController = require("../../controllers/usersController");

const signinStrategy = passport.use(new Strategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  module.exports = signinStrategy;