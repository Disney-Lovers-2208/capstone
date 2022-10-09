import React, { useState, useEffect } from 'react';
import SearchTabs from './SearchTabs';
import TvComponent from './TvComponent';

export const SearchFor = (props) => {
    const [input, setInput] = useState('');
    // const [tvListDefault, setTvListDefault] = useState();
    // const [tvList, setTvList] = useState();

    const updateInput = () => {
        const filteredTvs = tvListDefault.filter(tv => {
            return tv.title.toLowerCase().includes(input.toLowerCase());
        })

        setInput(input);
        setMovieList(filteredMovies);
    }

    return (
        <div>
            <SearchTabs />

            <br />

            <h2>Movies</h2>

            <h2>TV Shows
                {<TvComponent />}
            </h2>

            <h2>Books</h2>

        </div>
    )
};

export default SearchFor;