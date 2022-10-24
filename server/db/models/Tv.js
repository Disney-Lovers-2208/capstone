const Sequelize = require("sequelize");
const db = require("../db");

const Tv = db.define("tv", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
    },
  },
  genre: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "",
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  productType: {
    type: Sequelize.STRING,
    defaultValue: "tvshow",
  },
});


module.exports = Tv;
