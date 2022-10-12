const router = require("express").Router();
const {
  models: { Post },
} = require("../db");
const User = require("../db/models/User");
const Movie = require("../db/models/Movie");
const Book = require("../db/models/Book");
const Tv = require("../db/models/Tv");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await Post.findAll({ include: [User, Movie, Book, Tv] });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Post.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    await post.destroy();
    res.json(post);
  } catch (error) {
    next(error);
  }
});
