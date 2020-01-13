const express = require("expess");
const router = express.Router();
const passport = require("../../passport");

// passport.authenticate

router.post("signup", passport.authenticate("signup", {
    successRedirect: "/",
    failureRedirect: "/home",
    session: false
})
);