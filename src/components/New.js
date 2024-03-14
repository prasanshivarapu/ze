import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style.css"; // You can import your custom CSS file here

function NavbarComp1() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Navbar sticky="top" collapseOnSelect bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        className="logo-img"
                        src="static/images/logo.svg"
                        alt="Zerodha logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={handleMenuToggle}
                />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className={showMenu ? "show" : ""}
                >
                    <Nav className="me-auto">
                        <Nav.Link href="https://signup.zerodha.com">
                            Signup
                        </Nav.Link>
                        <Nav.Link href="about/index.html">About</Nav.Link>
                        <Nav.Link href="products/index.html">Products</Nav.Link>
                        <Nav.Link href="pricing/index.html">Pricing</Nav.Link>
                        <Nav.Link href="https://support.zerodha.com">
                            Support
                        </Nav.Link>
                        <Nav.Link href="open-account/index.html">
                            Open account
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto hide-on-small">
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="varsity.html">
                                <img
                                    className="nav-edu-img"
                                    src="static/images/products/varsity.png"
                                    alt=""
                                />
                                Varsity
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://tradingqna.com/">
                                <img
                                    className="nav-edu-img"
                                    src="static/images/products/tqna.png"
                                    alt=""
                                />
                                Trading Q&A
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://kite.zerodha.com">
                                Kite
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://console.zerodha.com">
                                Console
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://kite.trade">
                                Kite Connect
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://coin.zerodha.com">
                                Coin
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp1;
