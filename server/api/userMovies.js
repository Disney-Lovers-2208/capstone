const router = require("express").Router();
const {
  models: { User_Movie },
} = require("../db");

router.get("/favoriteMovie/:userId", async (req, res, next) => {
  try {
    const books = await User_Movie.findOne({
      where: {
        userId: req.params.userId,
        favorite: true,
      },
    });
    res.json(books);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
