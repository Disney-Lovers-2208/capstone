import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export const MovieCard = (props) => {
    const { movie } = props;
    const { id, imageUrl, title, description, genre } = movie;

    return (
        <Link to={`/movies/${id}`} style={{ color: 'inherit' }}>
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


export default MovieCard;