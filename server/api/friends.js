const router = require("express").Router();
const {
  models: { User, Connection },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const allConnections = await Connection.findAll();
    res.json(allConnections);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const friends = await Connection.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json(friends);
  } catch (error) {
    next(error);
  }
});
