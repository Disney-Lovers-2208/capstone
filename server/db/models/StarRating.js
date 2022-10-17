const Sequelize = require("sequelize");
const db = require("../db");

const StarRating = db.define("starRating", {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

StarRating.findTvAvgRating = async function(tvId) {
  const ratings = await this.findAll({
    where: {
      tvId: tvId
    },
  });
  const averageRating = ratings.reduce((accum, current) => {
    return accum += current.rating;
  }, 0) / ratings.length;
  return averageRating;
};

module.exports = StarRating;
