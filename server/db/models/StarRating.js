const Sequelize = require("sequelize");
const db = require("../db");

const StarRating = db.define("starRating", {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = StarRating;
