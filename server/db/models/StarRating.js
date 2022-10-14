const Sequelize = require("sequelize");
const db = require("../db");

const StarRating = db.define("starRating", {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// findAvgRating

// StarRating.findAvgRating = function(id) {
//   let average = 
// }

module.exports = StarRating;
