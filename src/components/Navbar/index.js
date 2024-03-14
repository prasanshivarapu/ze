import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nabar.css";

function NavbarComp() {
    return (
        <Navbar
            sticky="top"
            collapseOnSelect
            bg="light"
            expand="lg"
            className="bg-body-tertiary "
        >
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav nam" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nam">
                    <Nav className="nam">
                        <Nav.Link className="nav-links " href="#features">
                            Signup
                        </Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#features">Products</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#features">Support</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;
