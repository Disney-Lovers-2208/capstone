const Sequelize = require("sequelize");
const db = require("../db");

const Tv = db.define("tv", {
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

module.exports = Tv;
