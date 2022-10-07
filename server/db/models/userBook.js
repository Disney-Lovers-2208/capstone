const Sequelize = require("sequelize");
const db = require("../db");

const User_Book = db.define("user_book", {
  status: {
    type: Sequelize.ENUM(["Saved", "Favorite"]),
  },
});

module.exports = User_Book;
