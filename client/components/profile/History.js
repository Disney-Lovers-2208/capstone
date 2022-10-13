import React, { useState } from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import Filter from "./Filter";
import { Link } from "react-router-dom";

export const History = () => {
  const user = useSelector((state) => state.auth);

  const tvs = user?.tvs || [];
  const books = user?.books || [];
  const movies = user?.movies || [];

  const readBooks = books.filter((book) => book.user_book.status === "Read");
  const watchedMovies = movies.filter(
    (movie) => movie.user_movie.status === "Watched"
  );
  const watchedTvs = tvs.filter((tv) => tv.user_tv.status === "Watched");
  const seenAll = [...readBooks, ...watchedMovies, ...watchedTvs].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const [activeType, setActiveType] = useState("all");
  const [filtered, setFiltered] = useState(seenAll);

  return (
    <Container fluid className="profile">
      <Row>
        <Col>
          <Banner user={user} />
        </Col>
      </Row>
      <Filter
        activeType={activeType}
        setActiveType={setActiveType}
        setFiltered={setFiltered}
        movies={watchedMovies}
        tvs={watchedTvs}
        books={readBooks}
        all={seenAll}
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
                  <Link to={`/${item.productType}s/${item.id}`}>
                    <img src={item.imageUrl} alt="image" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </motion.div>
      </Row>
    </Container>
  );
};

export default History;
