const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define("book", {
  title: {
    type: Sequelize.STRING,
    unique: true,
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
    defaultValue:
      "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
  },
});

module.exports = Book;
