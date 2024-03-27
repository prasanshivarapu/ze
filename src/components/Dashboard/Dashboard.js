import React from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>sidebar</Col>
        <Col md={9}>
          <Navbar
            sticky="top"
            collapseOnSelect
            bg="light"
            expand="lg"
            className="bg-body-tertiary "
          >
            <Container fluid style={{ margin: "0.5vw 5vw" }}>
              <Navbar.Brand className="nav-links " href="/">
                <TbArrowBigLeftFilled />
              </Navbar.Brand>

              <Nav className="nam">
                <Nav.Link className="nav-links " href="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link className="nav-links " href="/orders">
                  Orders
                </Nav.Link>
                <Nav.Link className="nav-links " href="/holdings">
                  Holdings
                </Nav.Link>
                <Nav.Link className="nav-links " href="/positions">
                  Positions
                </Nav.Link>
                <Nav.Link className="nav-links " href="/bids">
                  Bids
                </Nav.Link>
                <Nav.Link className="nav-links " href="/funds">
                  Funds
                </Nav.Link>
                <Nav.Link className="nav-links " href="/funds">
                  <IoIosNotificationsOutline />
                </Nav.Link>
                <Nav.Link className="nav-links " href="/funds">
                  <CgProfile />
                </Nav.Link>
                <Nav.Link className="nav-links " href="/profile">
                  L73214
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
