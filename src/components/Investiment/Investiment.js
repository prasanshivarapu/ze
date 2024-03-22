import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
function Investiment() {
    return (
        <div>
            <section class="investments-header text-center container border-bottom">
                <h1>Investments</h1>
                <h5>
                    Everything from equities and derivatives to mutual funds and
                    fixed income
                </h5>
                <p>
                    Check out our{" "}
                    <a href="products.html">
                        technology offerings <span>&rarr;</span>
                    </a>
                </p>
            </section>
            <section className="kite-sections invest-sections center-on-mobile relative-section">
                <div className="products-video-container">
                    <Image
                        className="invest-head-img"
                        src="investments-head.png"
                    />
                    <Image className="invest-play-img" src="play.png" />
                </div>
                <Container>
                    <Row className="v-align around">
                        <Col xs={6} className="text-center">
                            <Image src="investments-stocks.png" />
                        </Col>
                        <Col xs={6}>
                            <h2>Stocks</h2>
                            <p className="text-grey text-med">
                                Trade stocks for delivery or intraday on over
                                5000 stocks listed on National Stock Exchange
                                (NSE) and Bombay Stock exchange (BSE).
                            </p>
                            <span className="text-small text-grey available-tag">
                                <i className="icon icon-info-circled-alt"></i>
                                Available on
                            </span>
                            <Row>
                                <Col xs={6}>
                                    <Button
                                        id="kite-link-1"
                                        title="Investment & trading platform"
                                        className="invest-links"
                                        target="_blank"
                                        variant="link"
                                    >
                                        Kite<span>&#8594;</span>
                                    </Button>
                                    <br />
                                    <Button
                                        id="console-link"
                                        title="Reporting platform"
                                        className="invest-links"
                                        target="_blank"
                                        variant="link"
                                    >
                                        Console<span>&#8594;</span>
                                    </Button>
                                    <br />
                                    <Button
                                        id="smallcase-link"
                                        title="Thematic investment platform"
                                        className="invest-links"
                                        target="_blank"
                                        variant="link"
                                    >
                                        Smallcase<span>&#8594;</span>
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button
                                        id="reports-link"
                                        title="Comprehensive stock analysis"
                                        className="invest-links"
                                        target="_blank"
                                        variant="link"
                                    >
                                        StockReports+<span>&#8594;</span>
                                    </Button>
                                    <br />
                                    <Button
                                        id="streak-link-1"
                                        title="Create, backtest, & deploy algos"
                                        className="invest-links"
                                        target="_blank"
                                        variant="link"
                                    >
                                        Streak<span>&#8594;</span>
                                    </Button>
                                    <br />
                                    <Button
                                        id="stocks-link"
                                        title="Market overview"
                                        className="invest-links"
                                        target="_blank"
                                        variant="link"
                                    >
                                        Market overview<span>&#8594;</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="kite-sections invest-sections center-on-mobile">
                <Container>
                    <Row className="v-align around">
                        <Col xs={6} className="img-right">
                            <h2>Direct mutual funds</h2>
                            <p className="text-grey text-med">
                                Invest in over 2000 direct mutual funds directly
                                without a distributor. Save up to 1.5% in
                                commissions every year.
                            </p>
                            <span className="text-small text-grey available-tag">
                                <i className="icon icon-info-circled-alt"></i>
                                Available on
                            </span>
                            <Button
                                id="coin-link"
                                className="invest-links"
                                title="Direct mutual fund investment platform"
                                href="coin.zerodha.com/"
                                target="_blank"
                                variant="link"
                            >
                                Coin<span>&#8594;</span>
                            </Button>
                        </Col>
                        <Col xs={6} className="text-center">
                            <Image src="investments-mf.png" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="kite-sections invest-sections center-on-mobile">
                <Container>
                    <Row className="v-align around">
                        <Col xs={6} className="text-center">
                            <Image
                                className="invest-fo-img"
                                src="investments-fo.png"
                            />
                        </Col>
                        <Col xs={6}>
                            <h2>Futures &amp; Options</h2>
                            <p className="text-grey text-med">
                                Trade metals, oil, and agri commodities on MCX
                                and stock and index futures and options on NSE.
                            </p>
                            <span className="text-small text-grey available-tag">
                                <i className="icon icon-info-circled-alt"></i>
                                Available on
                            </span>
                            <Row>
                                <Col xs={6}>
                                    <Button
                                        id="kite-link-2"
                                        title="Investment & trading platform"
                                        className="invest-links"
                                        href="kite.zerodha.com/"
                                        target="_blank"
                                        variant="link"
                                    >
                                        Kite<span>&#8594;</span>
                                    </Button>
                                    <br />
                                    <Button
                                        id="mc-link"
                                        title="Calculate margin requirements"
                                        className="invest-links"
                                        href="margin-calculator/index.html"
                                        variant="link"
                                    >
                                        Margin calculator<span>&#8594;</span>
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button
                                        id="sensibull-link"
                                        title="Options trading platform"
                                        className="invest-links"
                                        href="sensibull.com/"
                                        target="_blank"
                                        variant="link"
                                    >
                                        Sensibull<span>&#8594;</span>
                                    </Button>
                                    <br />
                                    <Button
                                        id="streak-link-2"
                                        title="Create, backtest, & deploy algos"
                                        className="invest-links"
                                        href="streak.tech/"
                                        target="_blank"
                                        variant="link"
                                    >
                                        Streak<span>&#8594;</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="kite-sections invest-sections center-on-mobile">
                <Container>
                    <Row className="v-align around">
                        <Col xs={6} className="img-right">
                            <h2>IPO</h2>
                            <p className="text-grey text-med">
                                Now apply online and invest in companies listing
                                on the Indian exchanges with an IPO (Initial
                                Public Offering) with your BHIM UPI app.{" "}
                                <a
                                    target="_blank"
                                    href="support.zerodha.com/category/console/ipo/ipo-application/articles/how-to-apply-for-ipos-and-how-to-stay-informed-of-new-ones"
                                >
                                    Read more
                                </a>
                            </p>
                            <span className="text-small text-grey available-tag">
                                <i className="icon icon-info-circled-alt"></i>
                                Available on
                            </span>
                            <Row>
                                <Col xs={6}>
                                    <Button
                                        id="coin-link"
                                        className="invest-links"
                                        title="Reporting platform"
                                        href="kite.zerodha.com/bids/ipo"
                                        target="_blank"
                                        variant="link"
                                    >
                                        Kite<span>&#8594;</span>
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button
                                        className="invest-links"
                                        href="ipo.html"
                                        variant="link"
                                    >
                                        Upcoming IPOs<span>&#8594;</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} className="text-center">
                            <Image
                                className="full-width"
                                src="ipo-products.png"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="kite-sections invest-sections center-on-mobile chart-section">
                <Container>
                    <Row className="v-align around">
                        <Col xs={6} className="text-center">
                            <Image src="gift-illustration.png" />
                        </Col>
                        <Col xs={6} className="img-right">
                            <h2>Gift stocks</h2>
                            <p className="text-grey text-med">
                                Introduce your friends and family to the habit
                                of investing for the long term by gifting them
                                stocks, ETFs, mutual funds, and gold bonds. A
                                gift that keeps on giving.
                            </p>
                            <Button
                                className="invest-links"
                                href="console.zerodha.com/gift"
                                variant="link"
                            >
                                Send a gift<span>&#8594;</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="kite-sections invest-sections center-on-mobile chart-section">
                <Container>
                    <Row className="v-align around">
                        <Col xs={6} className="img-right">
                            <h2>Fixed income</h2>
                            <p className="text-grey text-med">
                                Invest in bonds with yields better than bank FDs
                                guaranteed by the Government of India.
                            </p>
                            <Button
                                className="invest-links"
                                href="coin.zerodha.com/gsec"
                                target="_blank"
                                variant="link"
                            >
                                Govt. securities<span>&#8594;</span>
                            </Button>
                            <p className="separator">&nbsp;</p>
                            <p className="text-grey text-med">
                                Invest in Gold electronically and gain market
                                returns + fixed 2.5% per year on the invested
                                amount, guaranteed by the Government of India.
                            </p>
                            <Button
                                className="invest-links"
                                href="gold/index.html"
                                target="_blank"
                                variant="link"
                            >
                                Sovereign Gold Bond (SGB)<span>&#8594;</span>
                            </Button>
                        </Col>
                        <Col xs={6} className="text-center">
                            <Image src="zerodha.com/investments-income.png" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="kite-sections text-center kitefooter-container">
                <Container className="mini-container">
                    <h2>Open a Zerodha account</h2>
                    <p className="text-grey text-med">
                        Modern platforms and apps, ₹0 investments, and flat ₹20
                        intraday and F&amp;O trades.
                    </p>
                    <Button href="open-account/index.html" className="button">
                        Sign up now
                    </Button>
                </Container>
            </section>
        </div>
    );
}

export default Investiment;
