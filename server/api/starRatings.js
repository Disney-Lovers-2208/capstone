const router = require("express").Router();
const {
  models: { StarRating },
} = require("../db");
const User = require("../db/models/User");
const Movie = require("../db/models/Movie");
const Book = require("../db/models/Book");
const Tv = require("../db/models/Tv");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const starRatings = await StarRating.findAll({
      include: [User, Movie, Book, Tv],
    });
    res.json(starRatings);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await StarRating.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const starRating = await StarRating.findByPk(req.params.id);
    res.json(starRating);
  } catch (err) {
    next(err);
  }
});

router.get('/tvs/:tvId', async(req, res, next) => {
  try {
    const averageTvRating = await StarRating.findTvAvgRating(req.params.tvId);
    res.json(averageTvRating);
  } catch (error) {
    next(error);
  }
});

router.get('/movies/:movieId', async(req, res, next) => {
  try {
    const averageMovieRating = await StarRating.findMovieAvgRating(req.params.movieId);
    res.json(averageMovieRating); 
  } catch(error) {
    next(error);
  }
});

router.get('/books/:bookId', async(req, res, next) => {
  try {
    const averageBookRating = await StarRating.findBookAvgRating(req.params.bookId);
    res.json(averageBookRating);
  } catch(error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const starRating = await StarRating.findByPk(req.params.id);
    await starRating.destroy();
    res.json(starRating);
  } catch (error) {
    next(error);
  }
});
