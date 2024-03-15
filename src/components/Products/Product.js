import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./product.css";
function Product() {
    return (
        <div>
            <section className=" text-center border-bottom">
                <Container>
                    <h1>Technology</h1>
                    <h5>Sleek, modern, and intuitive trading platforms</h5>
                    <p>
                        Check out our{" "}
                        <a href="/">
                            investment offerings <span>→</span>
                        </a>
                    </p>
                </Container>
            </section>
            <section className="" id="kite">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col md={7} className="text-center">
                            <a href="/">
                                <Image src="./images/products-kite.png" fluid />
                            </a>
                        </Col>
                        <Col md={4}>
                            <h2>Kite</h2>
                            <p>
                                Our ultra-fast flagship trading platform with
                                streaming market data, advanced charts, an
                                elegant UI, and more. Enjoy the Kite experience
                                seamlessly on your Android and iOS devices.
                            </p>
                            <Row className="justify-content-between">
                                <Col xs={6}>
                                    <a>Try demo</a>
                                </Col>
                                <Col xs={6}>
                                    <a>Try demo</a>
                                </Col>
                            </Row>
                            <div className="kite-mobile-links">
                                <a target="_blank" href="/">
                                    <Image src="./images/andr.png" />
                                </a>
                                <a target="_blank" href="/">
                                    <Image src="./images/app.png" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col md={4} className="">
                            <h2>Console</h2>
                            <p>
                                The central dashboard for your Zerodha account.
                                Gain insights into your trades and investments
                                with in-depth reports and visualizations.
                            </p>
                            <Button href="/">Learn more </Button>
                        </Col>
                        <Col md={7} className="text-center">
                            <a href="/">
                                <Image
                                    src="./images/products-console.png"
                                    fluid
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="" id="coin">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col md={7} className="text-center">
                            <a target="_blank" href="/">
                                <Image src="./images/products-coin.png" fluid />
                            </a>
                        </Col>
                        <Col md={4}>
                            <h2>Coin</h2>
                            <p>
                                Buy direct mutual funds online, commission-free,
                                delivered directly to your Demat account. Enjoy
                                the investment experience on your Android and
                                iOS devices.
                            </p>
                            <a href="/"> coin </a>
                            <div className="">
                                <a target="_blank" href="/">
                                    <Image src="./images/andr.png" />
                                </a>
                                <a target="_blank" href="/">
                                    <Image src="./images/app.png" fluid />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col md={4} className="">
                            <h2>Kite Connect API</h2>
                            <p>
                                Build powerful trading platforms and experiences
                                with our super simple HTTP/JSON APIs. If you are
                                a startup, build your investment app and
                                showcase it to our clientbase.
                            </p>
                            <Button target="_blank" href="/">
                                Kite Connect{" "}
                                <i className="icon-arrow-right"></i>
                            </Button>
                        </Col>
                        <Col md={7} className="text-center">
                            <a target="_blank" href="/">
                                <Image
                                    src="./images/products-kiteconnect.png"
                                    fluid
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="" id="varsity">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col md={7} className="text-center">
                            <a target="_blank" href="/">
                                <Image
                                    src="./images/varsity-products.png"
                                    fluid
                                />
                            </a>
                        </Col>
                        <Col md={4}>
                            <h2>Varsity mobile</h2>
                            <p>
                                An easy to grasp, collection of stock market
                                lessons with in-depth coverage and
                                illustrations. Content is broken down into
                                bite-size cards to help you learn on the go.
                            </p>
                            <div className="">
                                <a href="/">
                                    <Image src="./images/andr.png" />
                                </a>
                                <a target="_blank" href="/">
                                    <Image src="./images/app.png" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="" id="coin">
                <Container>
                    <p className="text-center mt-5 mb-5">
                        Want to know more about our technology stack? Check out
                        the <a href="/">Zerodha.tech</a> blog.
                    </p>
                </Container>
            </section>
            <section className="">
                <Container className="center">
                    <h2 className="text-center mt-5 mb-5">
                        The Zerodha Universe
                    </h2>
                    <p className="text-center mb-5">
                        Extend your trading and investment experience even
                        further with our partner platforms
                    </p>
                    <Row className="evenly v-align">
                        <Col className="text-center" xs={12} md={4}>
                            <a href="/" target="_blank">
                                <Image
                                    src="./images/smallcase-logo.png"
                                    className="logo"
                                />
                                <br />
                                <span className="text-12 text-light-grey">
                                    Thematic investment platform
                                </span>
                            </a>
                        </Col>
                        <Col className="text-center" xs={12} md={4}>
                            <a href="/" target="_blank">
                                <Image
                                    src="./images/streak-logo.png"
                                    className="logo"
                                />
                                <br />
                                <span className="text-12 text-light-grey">
                                    Algo & strategy platform
                                </span>
                            </a>
                        </Col>
                        <Col className="text-center" xs={12} md={4}>
                            <a href="/" target="_blank">
                                <Image src="./images/sc.png" className="logo" />
                                <br />
                                <span className="text-12 text-light-grey sensibull-desc">
                                    Options trading platform
                                </span>
                            </a>
                        </Col>
                    </Row>
                    <Row className="evenly v-align">
                        <Col className="text-center" xs={12} md={4}>
                            <a href="/" target="_blank">
                                <Image
                                    src="./images/zerodhafundhouse.png"
                                    className="logo"
                                />
                                <br />
                                <span className="text-12 text-light-grey">
                                    Asset management
                                </span>
                            </a>
                        </Col>
                        <Col className="text-center" xs={12} md={4}>
                            <a href="/" target="_blank">
                                <Image
                                    src="./images/goldenpi-logo.png"
                                    className="logo"
                                />
                                <br />
                                <span className="text-12 text-light-grey">
                                    Bonds trading platform
                                </span>
                            </a>
                        </Col>
                        <Col className="text-center" xs={12} md={4}>
                            <a href="/" target="_blank">
                                <Image
                                    src="./images/ditto-logo.png"
                                    className="logo"
                                />
                                <br />
                                <span className="text-12 text-light-grey">
                                    Insurance
                                </span>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Product;
