import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

export const UserCard = (props) => {
    const { users } = props;

    return (
        <Container fluid className='all-users'>
            {users.map((user) => (
                <Card key={user.id} border="info" style={{ width: "15rem", margin: "2rem" }}>
                    <Link to={`/users/${user.id}`}>
                        <Card.Img variant='top' src={user.image}></Card.Img>
                    </Link>
                </Card>
            ))}
        </Container>
    )

};

export default UserCard;