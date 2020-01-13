const passport = require ("passport");
// const googleStrategy = require("./googleStrategy");
const signinStrategy = require("./signinStrategy");
const signupStrategy = require("./signupStrategy");

passport.use('signup', signupStrategy);
passport.use('signin', signinStrategy);


module.exports = passport;