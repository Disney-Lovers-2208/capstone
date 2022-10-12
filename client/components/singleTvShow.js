import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Col, Row, Form } from 'react-bootstrap';
import TvCard from './TvCard';
import { fetchSingleTv } from '../redux/tv';

export const SingleTvShow = () => {
    const tvshow = useSelector((state) => state.tv);
    // const tvshow = props.tvshow;
    // const { imageUrl, title, description, genre } = tvshow;
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        dispatch(fetchSingleTv(id));
    }, [dispatch])

    return (
        <div>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Write A Review</Form.Label>
                            <Form.Control as='textarea' rows={4} />
                        </Form.Group>
                    </Form>
                    {/* <Card>
                        <Card.Img variant='top' src={imageUrl} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <Card.Text>Genre:{genre}</Card.Text>
                        </Card.Body>
                    </Card> */}
                    {/* <TvCard /> */}

                </Col>
            </Row>
        </div>
    )
};

export default SingleTvShow;