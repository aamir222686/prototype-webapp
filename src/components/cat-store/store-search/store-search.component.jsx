import React, { useState } from 'react';
import './store-search.styles.scss';
import StoreSearchModal from '../store-search-modal/store-search-modal.component';

import Button from 'react-bootstrap/Button';


const StoreSearch = (props) => {


    const handleChange = (event) => {
        props.onChange(event.target.value);
    }

    const handleClick = (event) => {
        props.onClick(event.target.value)
    }

    return (
        <div className='search-container'>
            <input placeholder='Search with Product Name / ID / Store / Location' type='search' className='search-bar'
                onChange={handleChange} value={props.searchField} />

            <Button variant="primary" className='store-search-button' onClick={handleClick}>Search</Button>

        </div>
    )
};

export default StoreSearch;