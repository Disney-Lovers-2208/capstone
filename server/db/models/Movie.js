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
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});

module.exports = Movie;
