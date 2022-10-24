"use strict";
const {
  randPhrase,
  randSentence,
  randColor,
  randQuote,
  randEmail,
  randFirstName,
  randLastName,
} = require("@ngneat/falso");

const {
  db,
  models: {
    User,
    Movie,
    Book,
    Tv,
    Review,
    Connection,
    User_Movie,
    User_Book,
    User_Tv,
  },
} = require("../server/db");

const axios = require("axios");

function capitalizeName(string) {
  const text = string
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  return text;
}

function removeTags(string) {
  return string.replace(/<\/?[^>]+(>|$)/g, "");
}

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
  let movieTitles = [];
  for (let i = 0; i < moviesArr.length; i++) {
    if (!movieTitles.includes(moviesArr[i]["title"])) {
      await Promise.all([
        Movie.create({
          title: moviesArr[i]["title"],
          description: moviesArr[i]["overview"],
          genre: moviesArr[i]["genre_ids"],
          imageUrl: `https://image.tmdb.org/t/p/original/${moviesArr[i]["poster_path"]}`,
        }),
      ]);
      movieTitles.push(moviesArr[i]["title"]);
    }
  }
}

async function fetchTvShows() {
  const { data } = await axios.get("https://api.tvmaze.com/shows");
  return data;
}

async function mapTvShows() {
  const tvShowArr = await fetchTvShows();
  let tvTitles = [];
  for (let i = 0; i < tvShowArr.length; i++) {
    let description = tvShowArr[i]["summary"];
    description = removeTags(description);
    if (!tvTitles.includes(tvShowArr[i]["name"])) {
      await Promise.all([
        Tv.create({
          title: tvShowArr[i]["name"],
          description: description,
          genre: tvShowArr[i]["genres"],
          imageUrl: tvShowArr[i]["image"]["medium"],
        }),
      ]);
      tvTitles.push(tvShowArr[i]["name"]);
    }
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
  let bookTitles = [];
  for (let i = 0; i < listList.length; i++) {
    let bookList = listList[i].books;
    for (let i = 0; i < bookList.length; i++) {
      if (!bookTitles.includes(bookList[i]["title"].toLowerCase())) {
        let capitalizedTitle = capitalizeName(bookList[i]["title"]);
        await Promise.all([
          Book.create({
            title: capitalizedTitle,
            author: bookList[i]["author"],
            description: bookList[i]["description"],
            imageUrl: bookList[i]["book_image"],
          }),
        ]);
        bookTitles.push(bookList[i]["title"].toLowerCase());
      }
    }
  }
}

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // creating tv shows and movies
  await mapMovies();
  await mapBooks();
  await mapTvShows();

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

  for (let i = 4; i < 100; i++) {
    await Promise.all([
      User.create({
        id: i,
        firstName: randFirstName(),
        lastName: randLastName(),
        username: randColor() + Math.floor(Math.random() * 1000),
        password: "123",
        email: randEmail(),
        bio: randSentence(),
      }),
    ]);
  }

  const reviews = await Promise.all([
    Review.create({
      rating: 5,
      content: randQuote(),
      userId: 1,
      movieId: 1,
    }),
    Review.create({
      rating: 3,
      content: randQuote(),
      userId: 2,
      movieId: 1,
    }),
    Review.create({
      rating: 5,
      content: randQuote(),
      userId: 3,
      movieId: 1,
    }),
    Review.create({
      rating: 1,
      content: randQuote(),
      userId: 1,
      tvId: 1,
    }),
    Review.create({
      rating: 3,
      content: randQuote(),
      userId: 2,
      tvId: 1,
    }),
    Review.create({
      rating: 5,
      content: randQuote(),
      userId: 3,
      tvId: 1,
    }),
    Review.create({
      rating: 1,
      content: randQuote(),
      userId: 1,
      bookId: 1,
    }),
    Review.create({
      rating: 3,
      content: randQuote(),
      userId: 2,
      bookId: 1,
    }),
    Review.create({
      rating: 5,
      content: randQuote(),
      userId: 3,
      bookId: 1,
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
      let movieIdNum = Math.floor(Math.random() * 251) + 1;
      if (done.includes(movieIdNum)) {
        while (done.includes(movieIdNum)) {
          movieIdNum = Math.floor(Math.random() * 251);
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
      let bookIdNum = Math.floor(Math.random() * 176) + 1;
      if (done.includes(bookIdNum)) {
        do {
          bookIdNum = Math.floor(Math.random() * 176);
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
      let tvIdNum = Math.floor(Math.random() * 238) + 1;
      if (done.includes(tvIdNum)) {
        while (done.includes(tvIdNum)) {
          tvIdNum = Math.floor(Math.random() * 238) + 1;
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
