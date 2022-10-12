import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import UserCard from './UserCard';

export const AllUsers = () => {
    const users = useSelector((state) => state.users);

    return (
        <div className='all-items'>
            <Row xs={3} md={3}>
                {users.length ? users.map((user) => (
                    <Col key={user.id}>
                        <UserCard user={user} />
                    </Col>
                )) : null}
            </Row>
        </div>
    )
};

export default AllUsers;