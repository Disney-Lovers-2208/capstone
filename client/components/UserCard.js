import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

export const UserCard = (props) => {
    const { user } = props;
    const { firstName, lastName, bio, image } = user;

    return (
        <Container className='card'>
            <Card border='info' style={{ width: '15rem', backgroundColor: '#FF5454' }}>
                <Card.Img variant='top' src={image} />
                <Card.Body>
                    <Link to={`/profile`} style={{ color: 'inherit' }}>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                    </Link>
                    <Card.Text>About Me: {bio}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
};

export default UserCard;