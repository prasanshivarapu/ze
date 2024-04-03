import React from "react";
import { Button, Card, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import "./dashboard.css";
import useWindowSize from "../../coustomHook/useWindowSize";

const Dashboard = () => {
  const size = useWindowSize();
  return (
    <Container fluid>
      <Row>
        {size.width < 600 ? (
          <>
            {/* <Col md={12} className="card">
              <Card style={{ border: "none" }}>
                <div className="card_item">
                  <div className="card_item_1">
                    <Link className="links ">
                      <TbArrowBigLeftFilled className="react_icons " />
                    </Link>
                  </div>
                  <div className="card_item_2">
                    <Link className="links" to="/dashboard">
                      Dashboard
                    </Link>
                    <Link className="links" to="/orders">
                      Orders
                    </Link>
                    <Link className="links" to="/holdings">
                      Holdings
                    </Link>
                    <Link className="links" to="/positions">
                      Positions
                    </Link>
                    <Link className="links" to="/bids">
                      Bids
                    </Link>
                    <Link className="links" to="/funds">
                      Funds
                    </Link>
                    <Link className="links" to="/notification">
                      <IoMdNotificationsOutline className="react_icons" />
                    </Link>
                    <Link className="links" to="/profile">
                      <RxAvatar className="react_icons" />
                    </Link>
                    <Link className="links" to="/profile">
                      Ltj473
                    </Link>
                  </div>
                </div>
              </Card>
            </Col> */}
          </>
        ) : (
          <>
            <Col md={3} className="card">
              <Card style={{ border: "none" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <p className="notification_card">
                    NIFTY <span className="card_span">21988.30</span>{" "}
                    <span className="card_span1">-23.65 -0.11% </span>{" "}
                  </p>
                  <p className="notification_card">
                    SENSEX <span className="card_span">72532.70</span>{" "}
                    <span className="card_span1">-108.49 -0.15% </span>{" "}
                  </p>
                </div>
              </Card>
            </Col>
            <Col md={9} className="card">
              <Card style={{ border: "none" }}>
                <div className="card_item">
                  <div className="card_item_1">
                    <Link className="links ">
                      <TbArrowBigLeftFilled className="react_icons " />
                    </Link>
                  </div>
                  <div className="card_item_2">
                    <Link className="links" to="/dashboard">
                      Dashboard
                    </Link>
                    <Link className="links" to="/orders">
                      Orders
                    </Link>
                    <Link className="links" to="/holdings">
                      Holdings
                    </Link>
                    <Link className="links" to="/positions">
                      Positions
                    </Link>
                    <Link className="links" to="/bids">
                      Bids
                    </Link>
                    <Link className="links" to="/funds">
                      Funds
                    </Link>
                    <Link className="links" to="/notification">
                      <IoMdNotificationsOutline className="react_icons" />
                    </Link>
                    <Link className="links" to="/profile">
                      <RxAvatar className="react_icons" />
                    </Link>
                    <Link className="links" to="/profile">
                      Ltj473
                    </Link>
                  </div>
                </div>
              </Card>
            </Col>
          </>
        )}
      </Row>
      {/* // part 2 // */}
      <Row>
        {size.width < 600 ? (
          <>
            <Col md={12} className="card">
              <Card style={{ border: "none", height: "90vh" }}>
                <div className="card_name">Hi, Arvind</div>
                <hr />

                <div className="design">
                  <div className="design_inner">
                    <div>Equity</div>
                    <div>
                      <Row>
                        <Col md={6}>
                          <div className="design_matter">
                            <h1>0</h1>
                            <p>margin available</p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <p>
                              Margin used <span>0</span>
                            </p>
                            <p>
                              Opening balence <span>0</span>
                            </p>
                            <Link className="links_on_matter">
                              View Statement
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="design_inner">
                    <div>Commodity</div>
                    <div>
                      <Row>
                        <Col md={6}>
                          <div className="design_matter">
                            <h1>0</h1>
                            <p>margin available</p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <p>
                              Margin used <span>0</span>
                            </p>
                            <p>
                              Opening balence <span>0</span>
                            </p>
                            <Link className="links_on_matter">
                              View Statement
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text">
                  <img src="" alt="" /> <br />
                  <p className="paragrap">
                    You dont have any stock's your DEMAT yet. Get Started With
                    absolutely free equity investment
                  </p>
                  <br />
                  <Button>Start Investing</Button>
                </div>
              </Card>
            </Col>
          </>
        ) : (
          <>
            {" "}
            <Col md={3} className="card">
              <Card style={{ border: "none" }}>
                <h1>hello2</h1>
              </Card>
            </Col>
            <Col md={9} className="card">
              <Card style={{ border: "none", height: "90vh" }}>
                <div className="card_name">Hi, Arvind</div>
                <hr />

                <div className="design">
                  <div className="design_inner">
                    <div>Equity</div>
                    <div>
                      <Row>
                        <Col md={6}>
                          <div className="design_matter">
                            <h1>0</h1>
                            <p>margin available</p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <p>
                              Margin used <span>0</span>
                            </p>
                            <p>
                              Opening balence <span>0</span>
                            </p>
                            <Link className="links_on_matter">
                              View Statement
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="design_inner">
                    <div>Commodity</div>
                    <div>
                      <Row>
                        <Col md={6}>
                          <div className="design_matter">
                            <h1>0</h1>
                            <p>margin available</p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <p>
                              Margin used <span>0</span>
                            </p>
                            <p>
                              Opening balence <span>0</span>
                            </p>
                            <Link className="links_on_matter">
                              View Statement
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text">
                  <img src="" alt="" /> <br />
                  <p className="paragrap">
                    You dont have any stock's your DEMAT yet. Get Started With
                    absolutely free equity investment
                  </p>
                  <br />
                  <Button>Start Investing</Button>
                </div>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Dashboard;
