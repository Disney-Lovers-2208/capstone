const Sequelize = require("sequelize");
const db = require("../db");

const User_Movie = db.define("user_movie", {
  status: {
    type: Sequelize.ENUM(["Saved", "Favorite"]),
  },
});

module.exports = User_Movie;
