import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

export const AllMovies = () => {
    const movies = useSelector((state) => state.movies); 

    return (
        <div className="all-items">
            <Row xs={3} md={3}>
                {movies.length ? movies.map((movie) => (
                    <Col key={movie.id}>
                        <MovieCard movie={movie} />
                    </Col>
                )) : null}
            </Row>
        </div>
    )
};

export default AllMovies;