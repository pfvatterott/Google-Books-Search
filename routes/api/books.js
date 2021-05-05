const router = require("express").Router();
const booksController = require("../../controllers/booksController");

const apiKey = "AIzaSyA3YInjAHayQeCJsguOiGtyPJB-MLm-K0k";
const exampleCall = `https://www.googleapis.com/books/v1/volumes?q=harrypotter&key=${apiKey}`

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

router.get('search/:name', (req, res) => {
  console.log(res)
})

module.exports = router;
