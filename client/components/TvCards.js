import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { fetchTvShows } from '../store/tvshows';



export const TvCards = (props) => {
    const tvs = props.tvs;

    useEffect(() => {
        props.getTvShows();
    }, []);

    return (
        <Container>
            <Row xs={3} md={3}>
                {tvs.map((tv) => (
                    <Col>
                        <Card key={tv.id} border='info' style={{ width: '15rem', backgroundColor: '#FF5454' }}>
                            <Card.Img variant='top' src={tv.imageUrl} />
                            <Card.Body>
                                <Card.Title>{tv.title}</Card.Title>
                                <Card.Text>{tv.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
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