import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { useState } from "react";

const AccountOpenSection = () => {
    const [a, b] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`You have entered ${a}`);
        b("");
    };
    const inputNumber = (event) => {
        b(event.target.value);
    };

    return (
        <div>
            <section className="">
                <div className="container heading mt-5 mb-5">
                    <h1 className="text-center ">
                        Open a trading and demat account
                    </h1>
                    <h5 className="text-center text-grey">
                        Start investing brokerage free and join a community of
                        1+ crore investors and traders
                    </h5>
                </div>
            </section>
            <section className="account-open-sections acop-landing">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className="account-illus text-center">
                            <img
                                src="./images/account_open.png"
                                alt=""
                                className="img-fluid"
                            />
                        </Col>
                        <Col md={6} className="centerMobile ml-5">
                            <h2 className="heading mt-2 mb-2">Signup now</h2>
                            <span className="subheading color-grey mt-2 mb-3">
                                Or track your existing application
                            </span>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3 mt-3">
                                    <span className="input-group-prepend">
                                        <span className="input-group-text">
                                            +91
                                        </span>
                                    </span>
                                    <input
                                        type="tel"
                                        value={a}
                                        onChange={inputNumber}
                                        className="form-control input1"
                                        required
                                    />
                                    <p className="help-text mt-3 subheading color-grey text-12">
                                        You will receive an OTP on your number
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                                <p className="text-12 mt-2 mb-3">
                                    <a href="/">Want to open an NRI account?</a>
                                </p>
                            </form>

                            {/* <Row>
                                <Col md={8}>
                                    <form
                                        id="open_account_form"
                                        onSubmit={handleSubmit}
                                    >
                                        <Row className="not-around">
                                            <span className="mobile-prefix">
                                                +91
                                            </span>
                                            <input
                                                type="number"
                                                autoFocus
                                                min="1000000000"
                                                max="9999999999"
                                                name="mobile"
                                                id="user_mobile"
                                                placeholder="Your 10 digit mobile number"
                                                required
                                            />
                                            <p className="help-text color-grey text-12">
                                                You will receive an OTP on your
                                                number
                                            </p>
                                            <p className="help-text error-message text-12"></p>
                                            <input
                                                type="hidden"
                                                maxLength="25"
                                                name="source"
                                                id="user_source"
                                                value="zerodha"
                                                required
                                            />
                                            <input
                                                type="hidden"
                                                maxLength="25"
                                                name="partner_id"
                                                id="user_id"
                                                value=""
                                                required
                                            />
                                        </Row>
                                        <div className="open-account-submit-container">
                                            <Button
                                                type="submit"
                                                id="open_account_proceed_form"
                                                className="register-user"
                                            >
                                                Continue
                                                <div className="pulse-container">
                                                    <div className="pulse-bubble pulse-bubble-1"></div>
                                                    <div className="pulse-bubble pulse-bubble-2"></div>
                                                    <div className="pulse-bubble pulse-bubble-3"></div>
                                                    <div className="pulse-bubble pulse-bubble-4"></div>
                                                </div>
                                            </Button>
                                        </div>
                                    </form>
                                    <p className="text-12">
                                        <a href="open-account/nri.html">
                                            Want to open an NRI account?
                                        </a>
                                    </p>
                                </Col>
                            </Row> */}
                        </Col>
                    </Row>
                    <br />
                    <p className="text-grey text-1 text-center">
                        By submitting your contact details, you authorize
                        Zerodha to contact you even if you are registered on DND
                        &amp; conduct online KYC for trading &amp; demat account
                        opening as per KRA regulations and PMLA guidelines. To
                        learn about the details we collect when you sign up with
                        Zerodha, visit our{" "}
                        <a target="_blank" href="/">
                            support article.
                        </a>
                        <br />
                        <br /> If you are looking to open a HUF, Corporate,
                        Partnership, or NRI account, you have to use the{" "}
                        <a target="_blank" href="resources.html">
                            offline forms.
                        </a>{" "}
                        For help,{" "}
                        <a target="_blank" href="/">
                            click here.
                        </a>
                    </p>
                </Container>
            </section>
        </div>
    );
};

export default AccountOpenSection;
