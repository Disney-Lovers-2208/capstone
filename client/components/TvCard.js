import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

export const TvCard = (props) => {
    const { tvShow } = props;
    const { id, imageUrl, title, description } = tvShow;

    return (
        <Container className='card'>
            <Card border='info' style={{ width: '15rem', backgroundColor: '#FF5454' }}>
                <Card.Img variant='top' src={imageUrl} />
                <Card.Body>
                    <Link to={`/tvshows/${id}`} style={{ color: 'inherit' }}>
                        <Card.Title>{title}</Card.Title>
                    </Link>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )

};


export default TvCard;