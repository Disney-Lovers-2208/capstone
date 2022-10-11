import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { fetchBooks } from '../store/books';


export const BookCards = (props) => {
    const books = props.books;

    useEffect(() => {
        props.getBooks();
    }, []);

    return (
        <Container>
            <Row xs={3} md={3}>
                {books.map((book) => (
                    <Col>
                        <Card key={book.id} border='info' style={{ width: '15rem', backgroundColor: '#FF5454' }}>
                            <Card.Img variant='top' src={book.imageUrl} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>{book.description}</Card.Text>
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
        books: state.books
    }
};

const mapDispatch = (dispatch) => {
    return {
        getBooks: () => dispatch(fetchBooks()),
    }
}

export default connect (mapState, mapDispatch)(BookCards);