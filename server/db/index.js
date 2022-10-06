//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Movie = require("./models/Movie");
const Tv = require("./models/Tv");
const Book = require("./models/Book");
const Post = require("./models/Post");
const StarRating = require("./models/StarRating");

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Movie,
    Tv,
    Book,
    Post,
    StarRating,
  },
};
