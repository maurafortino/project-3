const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(usersController.create);

router.route("/:email")
.get(usersController.find);
// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;