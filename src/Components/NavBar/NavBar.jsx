import  Navbar  from 'react-bootstrap/Navbar'
import  Container from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'
import  NavDropdown  from 'react-bootstrap/NavDropdown'
import CartWigget from './CartWigget'


const NavBar = () => {
    return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Bendita Sucu </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Formas de pago</Nav.Link>
        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>*/}
        </Nav>
        <Nav>
                <Nav.Link href="#deets">
                    <CartWigget/>
                </Nav.Link>
 
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>


    )
}

export default NavBar
