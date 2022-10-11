const router = require("express").Router();
const {
  models: { User_Tv },
} = require("../db");

router.get("/favoriteTv/:userId", async (req, res, next) => {
  try {
    const tvs = await User_Tv.findOne({
      where: {
        userId: req.params.userId,
        favorite: true,
      },
    });
    res.json(tvs);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
