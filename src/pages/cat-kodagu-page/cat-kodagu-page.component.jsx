import React from 'react';
import './cat-kodagu-page.styles.scss';
import logo from '../../assets/cat-kodagu.png';
import 'tachyons';

import headerImage from '../../assets/business-header-image.svg';


const CatKodaguPage = () => (
    <div className='kodagu-main-container'>
        <nav class=" bg-near-white db dt-l w-100 border-box pa3 ph5-l shadow-3 ">
            <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#">
                <img src={logo} class="dib w5 br-100" alt="Site-Name" />
            </a>
            <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <a class="link dim dark-gray f4 dib mr3 mr4-l" href="#block1" >Feature</a>
                <a class="link dim dark-gray f4 dib mr3 mr4-l" href="#block2" >How it Works</a>
                <a class="link dim dark-gray f4 dib" href="#block3" >Contact Us</a>
            </div>
        </nav>
        <header>
            <span className='desc-container'>
                <h1>Main Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam ultricies lorem sed sem pellentesque, vitae tincidunt nisi cursus.
                Praesent enim nibh, faucibus sit amet dignissim nec, euismod at elit. In ornare
                quam id tortor ultricies, pellentesque eleifend nulla rutrum. Donec id molestie
                nunc, sed pellentesque neque.</p>
            </span>
            <span className='header-image'>
                <img src={headerImage} alt='header-img' />
            </span>
        </header>
        <section className='block1' id='block1'>
            <div className='card'>
                <img src='https://via.placeholder.com/150' alt='ph1' />
                <h3>FEATURE 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam ultricies lorem sed sem pellentesque, vitae tincidunt nisi cursus.</p>
            </div>
            <div className='card'>
                <img src='https://via.placeholder.com/150' alt='ph1' />
                <h3>FEATURE 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam ultricies lorem sed sem pellentesque, vitae tincidunt nisi cursus.</p>
            </div>
            <div className='card'>
                <img src='https://via.placeholder.com/150' alt='ph1' />
                <h3>FEATURE 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam ultricies lorem sed sem pellentesque, vitae tincidunt nisi cursus.</p>
            </div>
        </section>
        <section className='block2' id='block2'>
            <h2>How it Works</h2>
        </section>
        <section className='block3' id='block3'>
            <h2>Contact Us</h2>
        </section>
        <footer>
            <h2>FOOTER</h2>
        </footer>
    </div>
);

export default CatKodaguPage;