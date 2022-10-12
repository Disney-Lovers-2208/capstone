import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

export const BookCard = (props) => {
    const { book }= props;
    const { id, imageUrl, title, description, genre } = book;

    return (
        <Container className='card'>    
            <Card border='info' style={{ width: '15rem', backgroundColor: '#FF5454' }}>
                <Card.Img variant='top' src={imageUrl} />
                <Card.Body>
                    <Link to={`/books/${id}`} style={{ color: 'inherit' }}> 
                        <Card.Title>{title}</Card.Title>
                    </Link>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )

};

export default BookCard;