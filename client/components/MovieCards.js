import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { fetchMovies } from '../store/movies';

export const MovieCards = (props) => {
    const movies = props.movies;

    useEffect(() => {
        props.getMovies();
    }, []);

    return (
        <Container>
            <Row xs={3} md={3}>
                {movies.map((movie) => (
                    <Col>
                        <Card key={movie.id} border='info' style={{ width: '15rem', backgroundColor: '#FF5454' }}>
                            <Card.Img variant='top' src={movie.imageUrl} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )

};

const mapState = (state) => {
    return {
        movies: state.movies
    }
};

const mapDispatch = (dispatch) => {
    return {
        getMovies: () => dispatch(fetchMovies()),
    }
}

export default connect (mapState, mapDispatch)(MovieCards);