import React from 'react';
import './store-product-collection.styles.scss';
import StoreItems from './store-items';
import StoreProductCard from '../store-product-card/store-product-card.component';

const StoreProductCollection = (props) => {

    const filteredItems = StoreItems.filter(item => {
        return item.name.toLowerCase().includes(props.search.toLowerCase());
    })

    return (
        <>
            {
                filteredItems.map((item) => (
                    <StoreProductCard key={item.id} name={item.name} price={item.price} store={item.store} search={props.search} />
                ))
            }
        </>
    )
};

export default StoreProductCollection;