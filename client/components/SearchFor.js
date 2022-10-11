import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import TvCard from './TvCard';
import { Button, Row, Col, Card } from 'react-bootstrap';
import MovieCards from './MovieCards';
import BookCards from './BookCards';


export const SearchFor = () => {
    const { title } = useParams();
    console.log("title:", title);
    const tvshows = useSelector((state) => state.tvs);
    // const movies = useSelector((state) => state.movies);
    console.log("shows:", tvshows);
    const [tvList, setTvList] = useState([]);
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const filteredTitles = tvshows.filter(tvshow => {
            console.log('tvshow:', tvshow.title);
            return tvshow.title.toLowerCase().includes(title.toLowerCase())
        });
        setTvList(filteredTitles);
        console.log('filtered tvs:', filteredTitles);
    }, []);

    // useEffect(() => {
    //     const filteredTitles = movies.filter(movie => {
    //         console.log('movie:', movie.title)
    //         return movie.title.toLowerCase().includes(title.toLowerCase());
    //     });
    //     setMovieList(filteredTitles);
    //     console.log('filtered movies:', filteredTitles);
    // }, []);

    return (
        <div className="search-results">
            <p>Don't see your fave?</p>
            <Button variant='info' as={Link} to={'/add'} style={{ align: 'center' }}>Add Your Fave!</Button>

            <br />

            {/* {<MovieCards movieList={movieList} />} */}
            <Row xs={3} md={3}>
                {tvList.length ? tvList.map((tvshow) => (
                    <Col key={tvshow.id}>
                        <TvCard tvShow={tvshow} />
                    </Col>
                )) : null}
            </Row>
        </div>
    )
};

export default SearchFor;