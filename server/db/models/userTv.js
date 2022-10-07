const Sequelize = require("sequelize");
const db = require("../db");

const User_Tv = db.define("user_tv", {
  status: {
    type: Sequelize.ENUM(["Saved", "Favorite"]),
  },
});

module.exports = User_Tv;
