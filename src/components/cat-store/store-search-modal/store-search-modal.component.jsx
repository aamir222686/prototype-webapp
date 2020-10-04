import React from 'react';
import './store-search-modal.styles.scss';
import { Modal, Button } from 'react-bootstrap';
import StoreProductCollection from '../store-product-collection/store-product-collection.component';

const StoreSearchModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName="modal-800w"
                centered
            >
                <Modal.Header closeButton>
                    <h5>Search Term : {props.search.length > 0 ? `${props.search}` : "None"}</h5>
                </Modal.Header>
                <Modal.Body className='search-show-section' scrollable >
                    <StoreProductCollection search={props.search} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default StoreSearchModal;
