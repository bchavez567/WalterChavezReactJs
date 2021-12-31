import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';

import { Link } from 'react-router-dom';


function NavBar() {
    return (


    <Navbar bg="light" expand="lg" >
        <Container>
        <Navbar.Brand href="/">Bendita Sucu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link>
                <Link style={{textDecoration: "none"}} to="/categoria/interior">Suculentas</Link> 
            </Nav.Link>
            <Nav.Link>
                <Link style={{textDecoration: "none"}} to="/categoria/exterior">Cactus</Link> 
            </Nav.Link>
            <Nav.Link>
                <Link style={{textDecoration: "none"}} to="./Carrito">Carrito</Link> 
            </Nav.Link>
            </Nav>
        <CartWidget/>
        </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}

export default NavBar
