import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import TvCards from './TvCards';
import { Button } from 'react-bootstrap';
import MovieCards from './MovieCards';
import BookCards from './BookCards';
import { fetchTvShows } from '../store/tvshows';


export const SearchFor = () => {
    const { title } = useParams();
    console.log("title:", title);
    const tvshows = useSelector((state) => state.tvs);
    const dispatch = useDispatch();
    console.log("shows:", tvshows);
    const [tvList, setTvList] = useState();


    // const updateInput = (input) => {
    //     const filteredTitles = tvshows.filter(tvshow => {
    //         console.log('tvshow:', tvshow.title);
    //         // return tvshow.title.toLowerCase().includes(input.toLowerCase());
    //         return tvshow.title === "Under the Down";
    //     });
    //     // setInput(input);
    //     setTvList(filteredTitles);
    //     console.log('filtered:', filteredTitles);
    // }

    useEffect(() => {
        dispatch(fetchTvShows());
    }, [dispatch]);

    useEffect(() => {
        const filteredTitles = tvshows.filter(tvshow => {
            console.log('tvshow:', tvshow.title);
            return tvshow.title.toLowerCase().includes(title.toLowerCase())
        });
        setTvList(filteredTitles);
        console.log('filtered:', filteredTitles);
    }, [])

    return (
        <div className="search-results">
            {/* <SearchTabs /> */}
            {/* <SearchBar input={input} onChange={updateInput} /> */}
            
            <br />
            {/* {<BookCards />} */}
            {<TvCards tvlist={tvList} />} 

        </div>
    )
};

export default SearchFor;