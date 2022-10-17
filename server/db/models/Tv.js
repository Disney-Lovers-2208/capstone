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
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  productType: {
    type: Sequelize.STRING,
    defaultValue: "tvshow",
  },
});


module.exports = Tv;
