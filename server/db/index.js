//this is the access point for all things database related!
const db = require("./db");
const User = require("./models/User");
const Movie = require("./models/Movie");
const Tv = require("./models/Tv");
const Book = require("./models/Book");
const Post = require("./models/Post");
const StarRating = require("./models/StarRating");
const User_Movie = require("./models/UserMovie");
const User_Book = require("./models/UserBook");
const User_TV = require("./models/UserTv");
const Connection = require("./models/Connection");

//One-to-many
User.hasMany(StarRating);
StarRating.belongsTo(User);

Book.hasMany(StarRating);
StarRating.belongsTo(Book);

Movie.hasMany(StarRating);
StarRating.belongsTo(Movie);

Tv.hasMany(StarRating);
StarRating.belongsTo(Tv);

User.hasMany(Post);
Post.belongsTo(User);

Book.hasMany(Post);
Post.belongsTo(Book);

Movie.hasMany(Post);
Post.belongsTo(Movie);

Tv.hasMany(Post);
Post.belongsTo(Tv);

//Many-to-many Relationships
User.belongsToMany(User, { through: Connection, as: "friends" });

User.belongsToMany(Movie, { through: User_Movie });
Movie.belongsToMany(User, { through: User_Movie });

User.belongsToMany(Book, { through: User_Book });
Book.belongsToMany(User, { through: User_Book });

User.belongsToMany(Tv, { through: User_TV });
Tv.belongsToMany(User, { through: User_TV });

module.exports = {
  db,
  models: {
    User,
    Movie,
    Tv,
    Book,
    Post,
    StarRating,
    User_Movie,
    User_Book,
    User_TV,
    Connection,
  },
};
