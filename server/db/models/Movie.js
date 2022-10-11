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
    defaultValue:
      "https://images.freecreatives.com/wp-content/uploads/2017/10/flat-clapperboard-icon_1063-38.jpg",
  },
});

module.exports = Movie;
