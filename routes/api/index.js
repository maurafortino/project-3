//i am unsure who to link to routes - i think we can just do it like this 
//but will need to confirm with a TA/Ed
const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes)
router.use("/users", userRoutes)

module.exports = router;
