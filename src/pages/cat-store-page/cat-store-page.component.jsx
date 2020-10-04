import React, { useState } from 'react';
import './cat-store-page.styles.scss';

import StoreNavigation from '../../components/cat-store/store-navigation/store-navigation.component';
import StoreCarosel from '../../components/cat-store/store-carosel/store-carosel.component';
import StoreSearch from '../../components/cat-store/store-search/store-search.component';
import StoreProductCollection from '../../components/cat-store/store-product-collection/store-product-collection.component';
import StoreFooter from '../../components/cat-store/store-footer/store-footer.component';
import StoreCategoriesPanel from '../../components/cat-store/store-categories-panel/store-categories-panel.component';
import StoreCategoriesFillBlock from '../../components/cat-store/store-categories-fill-block/store-categories-fill-block.component';
import StoreSearchModal from '../../components/cat-store/store-search-modal/store-search-modal.component';

const CatStorePage = () => {
    const [searchField, setSearchField] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const handleChange = (newValue) => {
        setSearchField(newValue);
    }

    return (
        <div className='store-container'>
            <nav className='navigation'>
                <StoreNavigation />
            </nav>
            <header className='store-header'>
                <StoreCarosel />
            </header>
            <section className='search-bar'>
                <>
                    <StoreSearch value={searchField} onChange={handleChange} onClick={() => setModalShow(true)} />
                    <StoreSearchModal show={modalShow} onHide={() => setModalShow(false)} search={searchField} />
                </>
            </section>
            <section className='product-card-section'>
                <StoreProductCollection search={searchField} />
            </section>
            <section className='feature-section-1'>
                <StoreCategoriesPanel />
                <StoreCategoriesFillBlock />
            </section>
            <section className='store-footer'>
                <StoreFooter />
            </section>
        </div>
    )
};

export default CatStorePage;