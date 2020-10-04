import React from 'react';
import './store-carosel.styles.scss';
import phImage1 from '../../../assets/ph-image1.svg'
import phImage2 from '../../../assets/ph-image2.svg'
import phImage3 from '../../../assets/ph-image3.svg'

import Carousel from 'react-bootstrap/Carousel';


const StoreCarosel = () => (
    <Carousel className='carosel-container'>
        <Carousel.Item className='carosel-item'>
            <img
                className="d-block w-100 ph-image"
                src={phImage1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carosel-item'>
            <img
                className="d-block w-100 ph-image"
                src={phImage2}
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carosel-item '>
            <img
                className="d-block w-100 ph-image"
                src={phImage3}
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default StoreCarosel;