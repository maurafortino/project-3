const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/")
.get(usersController.findAll)
.post(usersController.create);

router.route("/signup")
  .post(usersController.create);

  
// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;