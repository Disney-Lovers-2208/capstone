import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';

export const BookCard = (props) => {
    const { book }= props;
    const { id, imageUrl, title, description, genre } = book

    return (
        <Link to={`/tvshows/${id}`} style={{ color: 'inherit' }}>     
            <Card border='info' style={{ width: '15rem', backgroundColor: '#FF5454' }}>
                <Card.Img variant='top' src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Genre: {genre}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )

};

export default BookCard;