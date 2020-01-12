const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//this is boiler plate code - we will need to adjust this depending on our routes
//but this is the general idea of what we need

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
