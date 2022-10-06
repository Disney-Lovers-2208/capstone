import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export const SearchTabs = () => {
    const [key, setKey] = useState('books')
    return (
        <Tabs
            id='search-tabs'
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className='mb-3'
        >
            <Tab eventKey={'books'} title='Books'>
                {/* books component will go here */}
            </Tab>
            <Tab eventKey={'tvshows'} title='TV Shows'>
                {/* tvshows component will go here */}
            </Tab>
            <Tab>
                {/* movies component will go here */}
            </Tab>
        </Tabs>
    )
}

export default SearchTabs;
