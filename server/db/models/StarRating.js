const Sequelize = require("sequelize");
const db = require("../db");

const StarRating = db.define("starRating", {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// StarRating.findAvgRating = function(ratings) {
//   let totalRatings = 0;
//   ratings.forEach((rating) => {
//     totalRatings += rating.rating;
//   });
//   let averageRating = totalRatings / ratings.length
//   return averageRating.toFixed(1);
// }

// StarRating.findAvgRating = async function(id) {
//   const ratings = await this.findByPk(id);
//   let totalRatings = 0;
//   ratings.forEach((rating) => {
//     totalRatings += rating.rating;
//   });
//   let averageRating = totalRatings / ratings.length;
//   return averageRating.toFixed(1);
// }


module.exports = StarRating;
