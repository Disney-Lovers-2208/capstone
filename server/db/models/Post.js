const Sequelize = require("sequelize");
const db = require("../db");

const Post = db.define("post", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
