const router = require("express").Router();
const {
  models: { User_Book },
} = require("../db");

router.get("/favoriteBook/:userId", async (req, res, next) => {
  try {
    const books = await User_Book.findOne({
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
