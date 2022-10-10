import React, { useState, useEffect } from 'react';
import SearchTabs from './SearchTabs';
import { Link } from 'react-router-dom';
import TvCards from './TvCards';
import Button from 'react-bootstrap/Button';
import SearchBar from './SearchBar';

export const SearchFor = (props) => {
    const [input, setInput] = useState('');
    const [tvList, setTvList] = useState();


    const updateInput = (input) => {
        const filteredTvs = tvs.filter(tv => {
            return tv.title.toLowerCase().includes(input.toLowerVase());
        });
        setInput(input);
        setTvList(filteredTvs);
    }


    return (
        <div>
            {/* <SearchTabs /> */}
            {/* <SearchBar input={input} onChange={updateInput}/> */}
            <p>Don't see your fave?</p>
            <Button bg='info' as={Link} to={'/add'}>Add Your Fave!</Button>
            
            <br />

            {/* <h2>Movies</h2> */}

            {<TvCards tvlist={tvList} />}

            {/* <h2>TV Shows
                {<TvCards tvlist={tvList} />}
            </h2> */}

            {/* <h2>Books</h2> */}

        </div>
    )
};

// need to use mapDispatch here as well as mapState?
export default SearchFor;