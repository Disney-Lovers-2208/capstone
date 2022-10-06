const Sequelize = require("sequelize");
const db = require("../db");

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  genre: {
    type: Sequelize.ENUM(["value", "another value"]),
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});

module.exports = Movie;
