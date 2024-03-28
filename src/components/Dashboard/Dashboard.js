import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
} from "react-bootstrap";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar
          sticky="top"
          collapseOnSelect
          bg="light"
          expand="lg"
          className="bg-body-tertiary "
          style={{ border: "1px solid black" }}
        >
          <Col md={3} style={{ borderRight: "1px solid black" }}>
            <Container
              fluid
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Nav className="nam">
                <Nav.Link
                  className="nav-links "
                  href="/dashboard"
                  style={{ fontSize: "1vw" }}
                >
                  NIFTY 50 <span style={{ color: "orange" }}>21983.08</span>
                </Nav.Link>
                <Nav.Link
                  className="nav-links "
                  href="/dashboard"
                  style={{ fontSize: "1vw" }}
                >
                  NIFTY 50 <span style={{ color: "orange" }}>21983.08</span>
                </Nav.Link>
              </Nav>
            </Container>
          </Col>
          <Col md={9}>
            <Container
              fluid
              style={{
                margin: "0.5vw 5vw",
                display: "flex",
                justifyContent: "center",
              }}
            >
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
          </Col>
        </Navbar>
      </Row>
      <Row>
        <Col md={3}>hi</Col>

        <Col
          md={9}
          style={{
            borderLeft: "1px solid black",
            height: "100vh",
          }}
        >
          <h1>Hi, Arvinder</h1>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "2vw",
            }}
          >
            <h3 style={{ marginLeft: "-18vw" }}>Equity</h3>
            <h3 style={{ marginLeft: "-3vw" }}>Commodity</h3>
          </div>
          <Row>
            <Col md={3}>
              <h1>0</h1>
              <h5>Margin availbel</h5>
            </Col>
            <Col
              md={6}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <h6>
                  Margin used <span>0</span>
                </h6>
                <h6>
                  Opening balence <span>0</span>
                </h6>
                <h6>View Statement</h6>
              </div>
              <div>
                <h1>0</h1>
                <h5>Margin availbel</h5>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h6>
                  Margin used <span>0</span>
                </h6>
                <h6>
                  Opening balence <span>0</span>
                </h6>
                <h6>View Statement</h6>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
