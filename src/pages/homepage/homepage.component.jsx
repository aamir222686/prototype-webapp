import React from 'react';
import { Link } from 'react-router-dom';
import 'tachyons';

import './homepage.styles.scss';
import kodagu from '../../assets/cat-kodagu.png';
import store from '../../assets/cat-store.png';
import bell from '../../assets/bell-the-cat.png';

const MainHomepage = () => (
    <section>
        <div className='home-page-container'>
            <Link to='/cat-kodagu' className='route kodagu'>
                <img src={kodagu} alt='cat-kodogu-logo'></img>
                <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" >Visit Page</button>
            </Link>
            <Link to='/cat-store' className='route store'>
                <img src={store} alt='cat-store-logo'></img>
                <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" >Visit Store</button>
            </Link>
            <Link to='/bell-the-cat' className='route bell'>
                <img src={bell} alt='bell-cat-logo'></img>
                <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" >Visit Page</button>
            </Link>
        </div>
    </section>
);

export default MainHomepage;