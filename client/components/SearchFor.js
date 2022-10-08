import React, { useState, useEffect } from 'react';
import SearchTabs from './SearchTabs';

export const SearchFor = (props) => {
    const [input, setInput] = useState('');
    const [movieListDefault, setMovieListDefault] = useState();
    const [movieList, setMovieList] = useState();

    const updateInput = () => {
        const filteredMovies = movieListDefault.filter(movie => {
            return movie.title.toLowerCase().includes(input.toLowerCase());
        })

        setInput(input);
        setMovieList(filteredMovies);
    }

    return (
        <div>
            <SearchTabs />

            <br />

            <h2>Movies</h2>

            <h2>TV Shows</h2>

            <h2>Books</h2>

        </div>
    )
}

export default SearchFor;