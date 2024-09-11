const {Router} = require('express');
const movieRouter = require("./moviesRouter");
const movieController = require('../controllers/movieController');
const validateId = require('../midlewares/validateId');
const router = Router();



router.use("/movies",movieRouter);
router.use("/movies/:id",validateId,movieController.getMovieById);

module.exports = router;