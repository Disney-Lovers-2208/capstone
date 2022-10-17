const Sequelize = require("sequelize");
const db = require("../db");

const StarRating = db.define("starRating", {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// findAvgRating

StarRating.findRating = async function(id) {
  let average = await this.findByPk(id);
};


// let average = await this.findByPk(id);
// average.reduce((accum, current) => {
//   return accum + current.rating;
// }, 0) / average.length;
// return average;

module.exports = StarRating;
