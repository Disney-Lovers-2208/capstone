import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

export const UserCard = (props) => {
    const { user } = props;
    const { firstName, lastName, image } = user;

    // return (
    //     <Container fluid className='all-users'>
    //         {users.map((user) => (
    //             <Card key={user.id} border="info" style={{ width: "15rem", margin: "2rem" }}>
    //                 <Link to={`/users/${user.id}`}>
    //                     <Card.Img variant='top' src={user.image}></Card.Img>
    //                 </Link>
    //             </Card>
    //         ))}
    //     </Container>
    // )

    return (
        <Container className='all-users'>
            <Card border='info' style={{ width: '15rem', backgroundColor: '#FF5454' }}>
                <Card.Body>
                    <Link to={`/profile`} style={{ color: 'inherit' }}>
                        <Card.Img src={image} variant='top'></Card.Img>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    )
};

export default UserCard;