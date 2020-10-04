import React from 'react';
import store from '../../../assets/cat-store.png';
import './store-navigation.styles.scss';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link, Route } from 'react-router-dom';

const StoreNavigation = () => (
    <Navbar bg="light" expand="lg" className='nav-container'>
        <Navbar.Brand><img src={store} className='store-logo' alt='store' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title="Stores" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Location 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Location 2</NavDropdown.Item>
                    <NavDropdown.Item href="#">Loaction 3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Category 1" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Sub Category 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sub Category 2</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sub Category 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Category 2" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Sub Category 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sub Category 2</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sub Category 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Category 3" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Sub Category 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sub Category 2</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sub Category 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Link to='/sign-in'><Button variant="outline-info" className='button'>Sign in</Button></Link>
            <Link to='/register'><Button variant="outline-danger" className='button'>Register</Button></Link>
            <Button variant="dark" className='button'>Cart</Button>
        </Navbar.Collapse>
    </Navbar>
)

export default StoreNavigation;

// logo, main categories with hover open, SignIn/SignUp, Cart.
// carousel with offers and features
// Search Products
// Products Featured
 // >>>>> Filters and Sort
// Footer