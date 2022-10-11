import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';



export const TvCard = (props) => {
    const { tvShow } = props;
    const { id, imageUrl, title, description, genre } = tvShow;
    // const { id } = useParams(); // for singleCard view

    return (
        <Link to={`/tvshows/${id}`}>
            <Card border='info' style={{ width: '15rem', backgroundColor: '#FF5454' }}>
                <Card.Img variant='top' src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{genre}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )

};


export default TvCard;