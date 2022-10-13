import React, { useState } from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

export const Saved = () => {
  const user = useSelector((state) => state.auth);

  const tvs = user?.tvs || [];
  const books = user?.books || [];
  const movies = user?.movies || [];

  //Sorted and filtered books, tv, movies
  const savedBooks = books
    .filter((book) => book.user_book.status === "Saved")
    .sort((a, b) => a.title.localeCompare(b.title));
  const savedMovies = movies
    .filter((movie) => movie.user_movie.status === "Saved")
    .sort((a, b) => a.title.localeCompare(b.title));
  const savedTvs = tvs
    .filter((tv) => tv.user_tv.status === "Saved")
    .sort((a, b) => a.title.localeCompare(b.title));
  const savedAll = [...savedMovies, ...savedTvs, ...savedBooks].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const [activeType, setActiveType] = useState("all");
  const [filtered, setFiltered] = useState(savedAll);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Banner user={user} />
        </Col>
      </Row>
      <Filter
        activeType={activeType}
        setActiveType={setActiveType}
        setFiltered={setFiltered}
        movies={savedMovies}
        tvs={savedTvs}
        books={savedBooks}
        all={savedAll}
      />
      <Row style={{ marginTop: "2rem" }}>
        <motion.div layout className="popular-movies">
          {filtered.map((item) => {
            return (
              <AnimatePresence key={item.id}>
                <motion.div
                  layout
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <h2>{item.title}</h2>
                  <img src={item.imageUrl} alt="image" />
                </motion.div>
              </AnimatePresence>
            );
          })}
        </motion.div>
      </Row>
    </Container>
  );
};

export default Saved;
