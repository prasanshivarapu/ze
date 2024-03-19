import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import "./home.css";
const Homepage = () => {
    return (
        <div className="homepage mb-5">
            <section className="text-center landing mb-5">
                <Container>
                    <Row className="justify-content-md-center">
                        <div className="text-center mt-3">
                            <img
                                className="landing-image"
                                src="./images/landing.png"
                                alt=""
                            />
                        </div>
                    </Row>

                    <h1 className="heading text-center m-3">
                        Invest in everything
                    </h1>
                    <h5 className="subheading text-center m-4">
                        Online platform to invest in stocks, derivatives, mutual
                        funds, and more
                    </h5>
                    <Link to="/signup">
                        <Button href="/signup" className="button">
                            Sign up now
                        </Button>
                    </Link>
                </Container>
            </section>

            <section className="marketing mb-5">
                <Container>
                    <Row className="between v-align">
                        <Col md={5} className="text-center">
                            <img
                                className="limage"
                                src="./images/larger.png"
                                alt=""
                            />
                        </Col>
                        <Col md={7}>
                            <h2 className="heading mb-3">
                                Largest stock broker in India
                            </h2>
                            <p className="subheading mb-4">
                                1.3+ Crore Zerodha clients contribute to over
                                15% of all retail order volumes in India daily
                                by trading and investing in:
                            </p>
                            <Row>
                                <Col md={6} className="no-margin-mobile">
                                    <ul className="list-items subheading">
                                        <li>Futures and Options</li>
                                        <li>Commodity derivatives</li>
                                        <li>Currency derivatives</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <ul className="list-items subheading">
                                        <li>Stocks & IPOs</li>
                                        <li>Direct mutual funds</li>
                                        <li>Bonds and Govt. Securities</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row className="">
                        <Col md={5}>
                            <h2 className="heading mb-5">
                                Trust with confidence
                            </h2>
                            <div className="heading">
                                <h4>Customer-first always</h4>
                                <p>
                                    That's why 1.3+ crore customers trust
                                    Zerodha with ₹3.5+ lakh crores worth of
                                    equity investments.
                                </p>
                            </div>
                            <div className="heading">
                                <h4>No spam or gimmicks</h4>
                                <p>
                                    No gimmicks, spam, "gamification", or
                                    annoying push notifications. High quality
                                    apps that you use at your pace, the way you
                                    like.
                                </p>
                            </div>
                            <div className="heading">
                                <h4>The Zerodha universe</h4>
                                <p>
                                    Not just an app, but a whole ecosystem. Our
                                    investments in 30+ fintech startups offer
                                    you tailored services specific to your
                                    needs.
                                </p>
                            </div>
                            <div className="heading">
                                <h4>Do better with money</h4>
                                <p>
                                    With initiatives like{" "}
                                    <a href="/" target="_blank">
                                        Nudge
                                    </a>{" "}
                                    and{" "}
                                    <a href="/" target="_blank">
                                        Kill Switch
                                    </a>
                                    , we don't just facilitate transactions, but
                                    actively help you do better with your money.
                                </p>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="text-center">
                                <a href="/">
                                    <img
                                        src="./images/ecosystem.png"
                                        alt="The Zerodha Universe"
                                        className="ecosystem-image img-fluid"
                                    />
                                </a>
                            </div>
                            <p className="text-center m-3 mb-5">
                                <a className="arro" href="/">
                                    Explore our products
                                    <span className="">
                                        <GoArrowRight />
                                    </span>
                                </a>

                                <a className="demo-link" href="/">
                                    Try Kite demo <GoArrowRight />
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 className="heading mb-5">Unbeatable pricing</h2>
                            <p className="subheading mb-4">
                                We pioneered the concept of discount broking and
                                price transparency in India. Flat fees and no
                                hidden charges.
                            </p>
                            <p>
                                <a href="/">
                                    See pricing <GoArrowRight />
                                </a>
                            </p>
                        </Col>
                        <Col md={6}>
                            <div className="pricing mb-5">
                                <div className="col ">
                                    <div className="pricing-box">
                                        <h1 className="heading">&#8377;0</h1>
                                        <p className="subheading pt-3">
                                            Free equity delivery and direct
                                            mutual funds
                                        </p>
                                    </div>
                                </div>
                                <div className="col  ">
                                    <div className="pricing-box">
                                        <h1 className="heading ">&#8377;20</h1>
                                        <p className="heading pt-3">
                                            Intraday and F&O
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row className="">
                        <Col md={5} className="text-center">
                            <a href="/">
                                <img
                                    className="eimage"
                                    src="./images/erodha.png"
                                    alt="ima"
                                />
                            </a>
                        </Col>
                        <Col md={7}>
                            <h4 className="heading mt-3 mb-3">
                                Free and open market education
                            </h4>
                            <p className="subheading mb-4">
                                Varsity, the largest online stock market
                                education book in the world covering everything
                                from the basics to advanced trading.
                            </p>
                            <a href="/">
                                Varsity <i className="icon-arrow-right m-3"></i>
                            </a>
                            <p className="space-top">
                                TradingQ&amp;A, the most active trading and
                                investment community in India for all your
                                market related queries.
                            </p>
                            <a href="/">
                                TradingQ&amp;A{" "}
                                <i className="icon-arrow-right m-3"></i>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="">
                <Container>
                    <div className="text-center mt-5 mb-5 heading">
                        <h2>Open a Account</h2>
                        <p className="text-grey text-med">
                            Modern platforms and apps, ₹0 investments, and flat
                            ₹20 intraday and F&O trades.
                        </p>
                        <Link to="/signup">
                            <Button
                                href="open-account/index.html"
                                className="button"
                            >
                                Sign up now
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Homepage;
