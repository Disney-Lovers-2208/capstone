"use strict";
const { randPhrase, randQuote, randUser } = require("@ngneat/falso");

const {
  db,
  models: {
    User,
    Movie,
    Book,
    Tv,
    Post,
    StarRating,
    Connection,
    User_Movie,
    User_Book,
    User_Tv,
  },
} = require("../server/db");

const axios = require("axios");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function fetchMovies() {
  const { data: dataZero } = await axios.get(
    "https://api.themoviedb.org/4/list/1?api_key=4ef60b9d635f533695cbcaccb6603a57"
  );
  const { data: dataOne } = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=1"
  );
  const { data: dataTwo } = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=2"
  );
  const { data: dataThree } = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=3"
  );
  const { data: dataFour } = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=4"
  );
  const { data: dataFive } = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=5"
  );
  const { data: dataSix } = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=6"
  );
  const { data: dataSeven } = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=7"
  );
  const { data: dataEight } = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=8"
  );

  const { data: dataNine } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=1"
  );
  const { data: dataTen } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=2"
  );
  const { data: dataEleven } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=3"
  );
  const { data: dataTwelve } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US&page=4"
  );

  const { data: genres } = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=4ef60b9d635f533695cbcaccb6603a57&language=en-US"
  );

  const arrZero = dataZero.results;
  const arrOne = dataOne.results;
  const arrTwo = dataTwo.results;
  const arrThree = dataThree.results;
  const arrFour = dataFour.results;
  const arrFive = dataFive.results;
  const arrSix = dataSix.results;
  const arrSeven = dataSeven.results;
  const arrEight = dataEight.results;
  const arrNine = dataNine.results;
  const arrTen = dataTen.results;
  const arrEleven = dataEleven.results;
  const arrTwelve = dataTwelve.results;
  const genreList = genres.genres;

  const concatArr = arrOne.concat(
    arrZero,
    arrOne,
    arrTwo,
    arrThree,
    arrFour,
    arrFive,
    arrSix,
    arrSeven,
    arrEight,
    arrNine,
    arrTen,
    arrEleven,
    arrTwelve
  );

  for (let i = 0; i < concatArr.length; i++) {
    let genreArr = concatArr[i]["genre_ids"];
    for (let j = 0; j < genreArr.length; j++) {
      for (let k = 0; k < genreList.length; k++) {
        if (genreArr[j] === genreList[k]["id"]) {
          genreArr[j] = genreList[k]["name"];
        }
      }
    }
  }

  return concatArr;
}

async function mapMovies() {
  const moviesArr = await fetchMovies();
  for (let i = 0; i < moviesArr.length; i++) {
    await Promise.all([
      Movie.create({
        title: moviesArr[i]["title"],
        description: moviesArr[i]["overview"],
        genre: moviesArr[i]["genre_ids"],
        imageUrl: `https://image.tmdb.org/t/p/original/${moviesArr[i]["poster_path"]}`,
      }),
    ]);
  }
}

async function fetchTvShows() {
  const { data } = await axios.get("https://api.tvmaze.com/shows");
  return data;
}

async function mapTvShows() {
  const tvShowArr = await fetchTvShows();
  for (let i = 0; i < tvShowArr.length; i++) {
    await Promise.all([
      Tv.create({
        title: tvShowArr[i]["name"],
        description: tvShowArr[i]["summary"],
        genre: tvShowArr[i]["genres"],
        imageUrl: tvShowArr[i]["image"]["medium"],
      }),
    ]);
  }
}

async function fetchBooks() {
  const { data } = await axios.get(
    "https://api.nytimes.com/svc/books/v3//lists/full-overview.json?api-key=9nt0bx3VGHAWcipI96xMV3ydjGcPMqEu"
  );

  return data;
}

async function mapBooks() {
  const bookArr = await fetchBooks();
  let listList = bookArr.results.lists;
  for (let i = 0; i < listList.length; i++) {
    let bookList = listList[i].books;
    for (let i = 0; i < bookList.length; i++) {
      await Promise.all([
        Book.create({
          title: bookList[i]["title"].toLowerCase(),
          author: bookList[i]["author"],
          description: bookList[i]["description"],
          imageUrl: bookList[i]["book_image"],
        }),
      ]);
    }
  }
}

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // creating tv shows and movies
  await mapTvShows();
  await mapMovies();
  await mapBooks();

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

  const postsOne = await Promise.all([
    Post.create({
      userId: 1,
      content: randQuote(),
      movieId: 3,
    }),
    Post.create({
      userId: 2,
      content: randQuote(),
      bookId: 5,
    }),
  ]);

  const starRatingsOne = await Promise.all([
    StarRating.create({
      rating: 1,
      userId: 3,
      tvId: 1,
    }),
    StarRating.create({
      rating: 5,
      userId: 2,
      tvId: 1,
    }),
  ]);

  const postsTwo = await Promise.all([
    Post.create({
      userId: 3,
      content: randQuote(),
      tvId: 17,
    }),
  ]);

  const starRatingsTwo = await Promise.all([
    StarRating.create({
      rating: 3,
      userId: 3,
      tvId: 2,
    }),
  ]);

  //make friend connections
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (i !== j) {
        await users[i].addFriend(users[j]);
      }
    }
  }

  //user_movie connections
  for (let i = 1; i <= 3; i++) {
    let done = [];
    for (let j = 0; j <= 15; j++) {
      let movieIdNum = Math.floor(Math.random() * 279) + 1;
      if (done.includes(movieIdNum)) {
        while (done.includes(movieIdNum)) {
          movieIdNum = Math.floor(Math.random() * 279);
        }
      } else {
        done.push(movieIdNum);
      }
      await Promise.all([
        User_Movie.create({
          userId: i,
          movieId: movieIdNum,
          featured: true,
        }),
      ]);
    }
  }

  //user_books connections
  for (let i = 1; i <= 3; i++) {
    let done = [];
    for (let j = 0; j <= 15; j++) {
      let bookIdNum = Math.floor(Math.random() * 229) + 1;
      if (done.includes(bookIdNum)) {
        do {
          bookIdNum = Math.floor(Math.random() * 229);
        } while (done.includes(bookIdNum));
      } else {
        done.push(bookIdNum);
      }
      await Promise.all([
        User_Book.create({
          userId: i,
          bookId: bookIdNum,
          featured: true,
        }),
      ]);
    }
  }

  //user_tv connections
  for (let i = 1; i <= 3; i++) {
    let done = [];
    for (let j = 0; j <= 15; j++) {
      let tvIdNum = Math.floor(Math.random() * 239) + 1;
      if (done.includes(tvIdNum)) {
        while (done.includes(tvIdNum)) {
          tvIdNum = Math.floor(Math.random() * 239);
        }
      } else {
        done.push(tvIdNum);
      }
      await Promise.all([
        User_Tv.create({
          userId: i,
          tvId: tvIdNum,
          featured: true,
        }),
      ]);
    }
  }

  // console.log("console of user magic", Object.keys(users[0].__proto__));
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
