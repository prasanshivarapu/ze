import "./nabar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useWindowSize from "../../coustomHook/useWindowSize";
import { RxHamburgerMenu } from "react-icons/rx";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function NavbarComp() {
    const size = useWindowSize();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleModelClick = () => {
        setShow(!show);
    };
    return (
        <div style={{ position: "relative" }}>
            <Navbar
                sticky="top"
                collapseOnSelect
                bg="light"
                expand="lg"
                className="bg-body-tertiary "
            >
                <Container fluid style={{ margin: "0.5vw 5vw" }}>
                    <Navbar.Brand href="/">
                        <img
                            className="logo-img"
                            src="../images/logo.svg"
                            alt="Zerodha logo"
                        />
                    </Navbar.Brand>

                    <Nav
                        className="nam"
                        style={{
                            display: `${size.width < 600 && "none"}`,
                            gap: "2vw",
                        }}
                    >
                        <Nav.Link className="nav-links " href="./signup">
                            Signup
                        </Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/product">Products</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <Nav.Link href="#features">Support</Nav.Link>
                    </Nav>
                    <RxHamburgerMenu
                        style={{
                            fontSize: `${size.width < 600 ? "6.7vw" : "2vw"}`,
                            marginLeft: "2vw",
                            cursor: "pointer",
                        }}
                        onClick={handleModelClick}
                    />
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose} style={{ top: 0, left: 0 }}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default NavbarComp;
