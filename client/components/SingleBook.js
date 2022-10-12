import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { fetchSingleBook } from '../redux/book';

const SingleBook = () => {
    const book = useSelector((state) => state.book);
    const { imageUrl, title, description, genre } = book;
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchSingleBook(id));
    }, [dispatch])   
    
    return (
        <div className='single-view'>
            <Form>
                <Form.Group className='mb-3' style={{ width: '10rem' }}>
                    <Form.Label>Write A Review</Form.Label>
                    <Form.Control as='textarea' rows={4} />
                </Form.Group>
            </Form> 

            <div>
                <h2>{title}</h2>
                <img src={imageUrl} alt='book-image' style={{ width: '15rem' }} />
                <p>{description}</p>
                <p>{genre}</p>
            </div>
        </div>
    )
};

export default SingleBook;