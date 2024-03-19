import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./support.css";
function Support() {
    return (
        <div>
            <section className="main1">
                <div className="faq-sections faq-head-section">
                    <Container>
                        <Row className="v-align between">
                            <Col
                                xs={12}
                                md={2}
                                className="center-on-mobile support-logo-link"
                            >
                                <h4 className="support-logo">
                                    <a href="/">Support Portal</a>
                                </h4>
                            </Col>
                            <Col
                                xs={12}
                                md={4}
                                className="text-right login-link"
                            >
                                <a className="kite-login" href="/">
                                    Track tickets
                                </a>
                            </Col>
                            <Col
                                xs={12}
                                md={4}
                                className="hide-on-mobile filler-div"
                            >
                                &nbsp;
                            </Col>
                        </Row>
                        <Row className="v-align between">
                            <Col xs={12} md={7}>
                                <h5 className="support-subheading">
                                    Search for an answer or browse help topics
                                    to create a ticket
                                </h5>
                                <div className="search-input-grp">
                                    <Form.Control
                                        id="search-text"
                                        type="text"
                                        className="typeahead"
                                        autoComplete="off"
                                        placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                                        autoFocus
                                    />
                                    <span className="dot-spinner">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </span>
                                    <span className="clear-search">
                                        &#x2716;
                                    </span>
                                    <span>
                                        <img
                                            src="/static/images/search.png"
                                            alt="search-icon"
                                        />
                                    </span>
                                </div>
                                <div className="super-links">
                                    <p className="quick-links">
                                        <a href="/">Track account opening</a>
                                    </p>
                                    <p className="quick-links">
                                        <a href="/">Track segment activation</a>
                                    </p>
                                    <p className="quick-links">
                                        <a href="/">Intraday margins</a>
                                    </p>
                                    <p className="quick-links">
                                        <a
                                            className="kite-manual-link"
                                            href="/"
                                        >
                                            Kite user manual
                                        </a>
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={5}>
                                <div className="alert-banner">
                                    <h4>Featured</h4>
                                    <div className="alert-back">
                                        <div className="banner-content">
                                            <ol>
                                                <li>
                                                    <a href="/">
                                                        Latest Intraday
                                                        leverages - MIS & CO
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Surveillance measure on
                                                        scrips - March 2024
                                                    </a>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section>
                <div className="faq-sections faq-content">
                    <Container>
                        <div className="support-cards-container">
                            <h2>To create a ticket, select a relevant topic</h2>
                            <Row className="between">
                                <Col xs={12} md={4} className="card-block">
                                    <h5 className="card-title text-muted">
                                        <a href="/">
                                            <i className="category-icons icon-account-opening"></i>
                                            Account Opening
                                        </a>
                                    </h5>
                                    <span className="text-grey">
                                        <a href="/">Getting started</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Online</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Offline</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Charges</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">
                                            Company, Partnership and HUF
                                        </a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">
                                            Non Resident Indian (NRI)
                                        </a>
                                    </span>
                                </Col>

                                <Col xs={12} md={4} className="card-block">
                                    <h5 className="card-title text-muted">
                                        <a href="/">
                                            <i className="category-icons icon-my-account"></i>
                                            Your Zerodha Account
                                        </a>
                                    </h5>
                                    <span className="text-grey">
                                        <a href="/">Login credentials</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Your Profile</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">
                                            Account modification and segment
                                            addition
                                        </a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">CMR & DP ID</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Nomination</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">
                                            Transfer and conversion of shares
                                        </a>
                                    </span>
                                </Col>

                                <Col xs={12} md={4} className="card-block">
                                    <h5 className="card-title text-muted">
                                        <a href="/">
                                            <i className="category-icons icon-trading-and-platforms"></i>
                                            Trading and Markets
                                        </a>
                                    </h5>
                                    <span className="text-grey">
                                        <a href="/">Trading FAQs</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Kite</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Margins</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Product and order types</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Corporate actions</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Kite features</a>
                                    </span>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
            <section>
                <div className="faq-sections faq-content">
                    <Container>
                        <div className="support-cards-container">
                            <h2>To create a ticket, select a relevant topic</h2>
                            <Row className="between">
                                <Col xs={12} md={4} className="card-block">
                                    <h5 className="card-title text-muted">
                                        <a href="/">
                                            <i className="category-icons icon-funds"></i>
                                            Funds
                                        </a>
                                    </h5>
                                    <span className="text-grey">
                                        <a href="/">Fund withdrawal</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Adding funds</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Adding bank accounts</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">eMandates</a>
                                    </span>
                                </Col>

                                <Col xs={12} md={4} className="card-block">
                                    <h5 className="card-title text-muted">
                                        <a href="/">
                                            <i className="category-icons icon-q-backoffice"></i>
                                            Console
                                        </a>
                                    </h5>
                                    <span className="text-grey">
                                        <a href="/">IPO</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Portfolio</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Funds statement</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Profile</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Reports</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Referral program</a>
                                    </span>
                                </Col>

                                <Col xs={12} md={4} className="card-block">
                                    <h5 className="card-title text-muted">
                                        <a href="/">
                                            <i className="category-icons icon-mutual-funds"></i>
                                            Coin
                                        </a>
                                    </h5>
                                    <span className="text-grey">
                                        <a href="/">
                                            Understanding mutual funds and Coin
                                        </a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Coin app</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Coin web</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">Transactions and reports</a>
                                    </span>
                                    <span className="text-grey">
                                        <a href="/">
                                            National Pension Scheme (NPS)
                                        </a>
                                    </span>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default Support;
