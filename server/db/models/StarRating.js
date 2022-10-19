const Sequelize = require("sequelize");
const db = require("../db");

const StarRating = db.define("starRating", {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

StarRating.findTvAvgRating = async function(tvId) {
  const tvRatings = await this.findAll({
    where: {
      tvId: tvId
    },
  });
  const averageTvRating = tvRatings.reduce((accum, current) => {
    return accum += current.rating;
  }, 0) / tvRatings.length;
  return averageTvRating;
};

StarRating.findMovieAvgRating = async function(movieId) {
  const movieRatings = await this.findAll({
    where: {
      movieId: movieId
    },
  });
  const averageMovieRating = movieRatings.reduce((accum, current) => {
    return accum += current.rating;
  }, 0) / movieRatings.length;
  return averageMovieRating;
};

StarRating.findBookAvgRating = async function(bookId) {
  const bookRatings = await this.findAll({
    where: {
      bookId: bookId
    },
  });
  const averageBookRating = bookRatings.reduce((accum, current) => {
    return accum += current.rating;
  }, 0) / bookRatings.length;
  return averageBookRating;
}

module.exports = StarRating;
