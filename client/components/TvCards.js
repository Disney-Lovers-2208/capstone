import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import { fetchTvShows } from '../store/tvshows';
import SearchTabs from './SearchTabs';

export const TvCards = (props) => {
    const tvs = props.tvs;

    useEffect(() => {
        props.getTvShows();
    });

    return (
        <Row xs={3} md={3}>
            <SearchTabs />
            {tvs.map((tv) => (
                <Col>
                    <Card key={tv.id} bg='primary' border='info' style={{ width: '15rem' }}>
                        <Card.Img variant='top' src={tv.imageUrl} />
                        <Card.Body>
                            <Card.Title as={Link} to={'/tvs/:id'}>{tv.title}</Card.Title>
                            <Card.Text>{tv.description}</Card.Text>
                            <Card.Text>{tv.genre}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )

};

const mapState = (state) => {
    return {
        tvs: state.tvs
    }
};

const mapDispatch = (dispatch) => {
    return {
        getTvShows: () => dispatch(fetchTvShows()),
    }
}

export default connect (mapState, mapDispatch)(TvCards);