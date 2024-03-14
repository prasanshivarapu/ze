import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"
function Footer() {
    return (
        <footer id="footer">
            <Container>
                <Row className="main-footer">
                    <Col md={3}>
                        <div className="footer-logo">
                            <img src="static/images/logo.svg" alt="" />
                        </div>
                        <p className="copyright text-grey">
                            © 2010 - 2024, reactbootstrap Ltd.
                        </p>
                        <p className="copyright text-grey">
                            All rights reserved.
                        </p>
                        {/* <ul className="social">
                            <li>
                                <a target="_blank" href="/">
                                    <img
                                        src="static/images/x-twitter.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="/">
                                    <i className="icon-facebook-official"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="/">
                                    <i className="icon-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="/">
                                    <i className="icon-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="/">
                                    <i className="icon-telegram"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="/">
                                    <img
                                        className="youtube-logo"
                                        src="static/images/youtube.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                        </ul> */}
                    </Col>
                    <Col md={3}>
                        <ul className="list-style">
                            <li className="nav-head">Company</li>
                            <li>
                                <a href="about/index.html">About</a>
                            </li>
                            <li>
                                <a href="products/index.html">Products</a>
                            </li>
                            <li>
                                <a href="pricing/index.html">Pricing</a>
                            </li>
                            <li>
                                <a href="refer/index.html">
                                    Referral programme
                                </a>
                            </li>
                            <li>
                                <a href="/careers.zerodha.com">Careers</a>
                            </li>

                            <li>
                                <a href="media/index.html">Press &amp; media</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul className="list-style">
                            <li className="nav-head">Support</li>
                            <li>
                                <a href="contact/index.html">Contact us</a>
                            </li>
                            <li>
                                <a href="/support.zerodha.com">
                                    Support portal
                                </a>
                            </li>
                            <li>
                                <a href="z-connect.html">Z-Connect blog</a>
                            </li>
                            <li>
                                <a href="charges/index.html">List of charges</a>
                            </li>
                            <li>
                                <a href="/">Downloads &amp; resources</a>
                            </li>
                            <li>
                                <a href="/">Videos</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul className="list-style">
                            <li className="nav-head">Account</li>
                            <li>
                                <a href="open-account/index.html">
                                    Open an account
                                </a>
                            </li>
                            <li>
                                <a href="fund-transfer/index.html">
                                    Fund transfer
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="smallprint">
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &amp;​ MCX –
                        SEBI Registration no.: INZ000031633 CDSL/NSDL:
                        Depository services through Zerodha Broking Ltd. – SEBI
                        Registration no.: IN-DP-431-2019 Commodity Trading
                        through Zerodha Commodities Pvt. Ltd. MCX: 46025;
                        NSE-50001 – SEBI Registration no.: INZ000038238
                        Registered Address: Zerodha Broking Ltd., #153/154, 4th
                        Cross, Dollars Colony, Opp. Clarence Public School, J.P
                        Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
                        For any complaints pertaining to securities broking
                        please write to . Please ensure you carefully read the
                        Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on{" "}
                        <a href="/" target="_blank">
                            SEBI SCORES
                        </a>
                        : Register on SCORES portal. Mandatory details for
                        filing complaints on SCORES: Name, PAN, Address, Mobile
                        Number, E-mail ID. Benefits: Effective Communication,
                        Speedy redressal of the grievances
                    </p>
                    <p>
                        <a href="/" target="_blank">
                            Smart Online Dispute Resolution
                        </a>
                    </p>
                    <p>
                        Investments in securities market are subject to market
                        risks; read all the related documents carefully before
                        investing.
                    </p>
                    <p>
                        Attention investors: 1) Stock brokers can accept
                        securities as margins from clients only by way of pledge
                        in the depository system w.e.f September 01, 2020. 2)
                        Update your e-mail and phone number with your stock
                        broker / depository participant and receive OTP directly
                        from depository on your e-mail and/or mobile number to
                        create pledge. 3) Check your securities / MF / bonds in
                        the consolidated account statement issued by NSDL/CDSL
                        every month.
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account.
                        Update your mobile numbers/email IDs with your stock
                        brokers. Receive information of your transactions
                        directly from Exchange on your mobile/email at the end
                        of the day. Issued in the interest of investors. KYC is
                        one time exercise while dealing in securities markets -
                        once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the
                        same process again when you approach another
                        intermediary." Dear Investor, if you are subscribing to
                        an IPO, there is no need to issue a cheque. Please write
                        the Bank account number and sign the IPO application
                        form to authorize your bank to make payment in case of
                        allotment. In case of non allotment the funds will
                        remain in your bank account. As a business we don't give
                        stock tips, and have not authorized anyone to trade on
                        behalf of others. If you find anyone claiming to be part
                        of Zerodha and offering such services, please{" "}
                        <a href="/">create a ticket here</a>.
                    </p>
                </Row>
                <div className="footer-graveyard-links text-center">
                    <ul>
                        <li>
                            <a href="/">NSE</a>
                        </li>
                        <li>
                            <a href="/">BSE</a>
                        </li>
                        <li>
                            <a href="/">MCX</a>
                        </li>
                        <li>
                            <a href="/">Terms &amp; conditions</a>
                        </li>
                        <li>
                            <a href="/">Policies &amp; procedures</a>
                        </li>
                        <li>
                            <a href="/">Privacy policy</a>
                        </li>
                        <li>
                            <a href="/">Disclosure</a>
                        </li>
                        <li>
                            <a href="/">For investor's attention</a>
                        </li>
                        <li>
                            <a href="/">Investor charter</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
