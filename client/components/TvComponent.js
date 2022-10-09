import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'react-bootstrap';
import { fetchTvShows } from '../store/tvshows';

export const TvComponent = (props) => {
    const tvs = props.tvs;

    useEffect(() => {
        props.getTvShows();
    });

    return (
        <Row xs={3} md={3}>
            {tvs.map((tv) => (
                <Col>
                    <Card key={tv.id} bg='primary' border='info' style={{ width: '15rem' }}>
                        <Card.Img variant='top' src={tv.imageUrl} />
                        <Card.Body>
                            <Card.Title>{tv.title}</Card.Title>
                            <Card.Text>{tv.description}</Card.Text>
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

export default connect (mapState, mapDispatch)(TvComponent);