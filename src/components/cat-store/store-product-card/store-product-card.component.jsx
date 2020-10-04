import React from 'react';
import './store-product-card.styles.scss';

import { Card, Button } from 'react-bootstrap';

const StoreProductCard = ({ name, price, store, search }) => {

    return (
        < div className='card-store-container' >
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="https://react.semantic-ui.com/images/wireframe/image-text.png" />
                <Card.Body>
                    <h2>{name}</h2>
                    <p>PRICE : {price} ₹ | STORE : {store} </p>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div >
    )
};

export default StoreProductCard;