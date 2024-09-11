const {Router} = require("express");
const movieController = require("../controllers/movieController");
const validateMovies = require("../midlewares/validateMovies");
const movieRouter = Router();

movieRouter.get("/",movieController.getAllMovies);
movieRouter.post("/",validateMovies,movieController.createMovie);
module.exports = movieRouter;