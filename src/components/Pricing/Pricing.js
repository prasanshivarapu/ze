import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./pricing.css";
function Pricing() {
    return (
        <div>
            <section className="text-center pri">
                <h1>Pricing</h1>
                <h5>
                    Free equity investments and flat ₹20 intraday and Flat ₹O
                    trades
                </h5>
            </section>
            <section className="text-center pri">
                <Container>
                    <Row className="justify-content-between ">
                        <Col md={4}>
                            <img src="./images/logo192.png" alt="" fluid />
                            <h3>Free equity delivery</h3>
                            <p className="">
                                All equity delivery investments (NSE, BSE), are
                                absolutely free — ₹ 0 brokerage.
                            </p>
                        </Col>
                        <Col md={4}>
                            <img src="./images/20.png" alt="" fluid />
                            <h3>Intraday and F&amp;O trades</h3>
                            <p className="">
                                Flat ₹ 20 or 0.03% (whichever is lower) per
                                executed order on intraday trades across equity,
                                currency, and commodity trades. Flat ₹ 20 on all
                                option trades.
                            </p>
                        </Col>
                        <Col md={4}>
                            <img src="./images/logo192.png" alt="" fluid />
                            <h3>Free direct MF</h3>
                            <p className="">
                                All direct mutual fund investments are
                                absolutely free — ₹ 0 commissions &amp; DP
                                charges.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className=" text-center mb-5 mt-5 ">
                <Container>
                    <div className="">
                        <h2>Open a Zerodha account</h2>
                        <p className=" ">
                            Modern platforms and apps, ₹0 investments, and flat
                            ₹20 intraday and F&amp;O trades.
                        </p>

                        <Button> Sign up now</Button>
                    </div>
                </Container>
            </section>
            <section className=" mt-5 mb-5">
                <Container>
                    <div className="">
                        <Row className="justify-content-center mb-5">
                            <Col md={4} className="text-center">
                                <h5 className="mt-3 mb-5">
                                    <a href="../brokerage-calculator.html">
                                        Brokerage calculator
                                    </a>
                                </h5>
                            </Col>
                            <Col md={4} className="text-center">
                                <h5 className="mt-3 mb-5">
                                    <a href="/">List of charges</a>
                                </h5>
                            </Col>
                        </Row>
                        <ul className="list-items">
                            <li className=" ">
                                Call &amp; Trade and RMS auto-squareoff:
                                Additional charges of ₹50 + GST per order.
                            </li>
                            <li className=" ">
                                Digital contract notes will be sent via e-mail.
                            </li>
                            <li className=" ">
                                Physical copies of contract notes, if required,
                                shall be charged ₹20 per contract note. Courier
                                charges apply.
                            </li>
                            <li className=" ">
                                For NRI account (non-PIS), 0.5% or ₹100 per
                                executed order for equity (whichever is lower).
                            </li>
                            <li className=" ">
                                For NRI account (PIS), 0.5% or ₹200 per executed
                                order for equity (whichever is lower).
                            </li>
                            <li className=" ">
                                If the account is in debit balance, any order
                                placed will be charged ₹40 per executed order
                                instead of ₹20 per executed order.
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Pricing;
