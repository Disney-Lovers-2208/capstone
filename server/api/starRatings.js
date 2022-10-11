const router = require("express").Router();
const {
  models: { StarRating },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const starRatings = await StarRating.findAll();
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

router.delete("/:id", async (req, res, next) => {
  try {
    const starRating = await StarRating.findByPk(req.params.id);
    await starRating.destroy();
    res.json(starRating);
  } catch (error) {
    next(error);
  }
});
