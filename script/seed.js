"use strict";
const {
  randMovie,
  randBook,
  randPhrase,
  randQuote,
  randUser,
} = require("@ngneat/falso");

const {
  db,
  models: { User, Movie, Book, Tv, Post },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      firstName: "Wendy",
      lastName: "Darling",
      username: "wdflying80",
      password: "123",
      email: "wendyd@yahoo.com",
      bio: "I love reading books about flying!",
    }),

    User.create({
      firstName: "Alice",
      lastName: "Liddel",
      username: "alice340",
      password: "123",
      email: "alicewonderland@gmail.com",
      bio: "Love anything that has to do with fantasy and wonder!",
    }),

    User.create({
      firstName: "Jennifer",
      lastName: "Hunt",
      username: "jhunt12",
      password: "123",
      email: "jhunt@aol.com",
      bio: "Currently loving American Horror Story!",
    }),
  ]);

  let movies = [];
  for (let i = 0; i < 100; i++) {
    movies[i] = await Movie.create({
      title: randMovie(),
      description: randQuote(),
    });
  }

  let books = [];
  for (let i = 0; i < 100; i++) {
    books[i] = await Book.create({
      title: randBook().title,
      author: randBook().author,
      description: randQuote(),
    });
  }

  let tv = [];
  for (let i = 0; i < 100; i++) {
    tv[i] = await Tv.create({
      title: randMovie(),
      description: randQuote(),
    });
  }

  const posts = await Promise.all([
    Post.create({
      userId: 1,
      content: randQuote(),
      movieId: 3,
    }),
    Post.create({
      userId: 2,
      content: randQuote(),
      bookId: 54,
    }),
    Post.create({
      userId: 3,
      content: randQuote(),
      tvId: 17,
    }),
  ]);

  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
