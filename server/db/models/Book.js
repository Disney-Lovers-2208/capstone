const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define("book", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
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

module.exports = Book;
