import { Container, Row, Col, Button } from "react-bootstrap";
import "./account.css";
import { useState } from "react";

const AccountOpenSection = () => {
    const [a, b] = useState("");
    const [c, d] = useState("");
    const [aadhar, setaadhar] = useState("");
    const [date, setdate] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [pan, setpan] = useState("");
    const [email, setemail] = useState("");
    const [bank, setbank] = useState("");
    const [bank2, setbank2] = useState("");
    const [ifsc, setifsc] = useState("");
    const [isVari, setisVeri] = useState(true);
    const [isVari1, setisVeri1] = useState(false);
    const [is, isset] = useState(false);
    const [final, setfinal] = useState(false);
    const [note, setnote] = useState(false);
    const [bankD, setbankD] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setisVeri(false);
        setisVeri1(true);
        alert(`You have entered ${a}`);
        b("");
    };
    const handleSubmit2 = (event) => {
        event.preventDefault();

        if (c === "1234") {
            alert("YOu have entered correct value");
            isset(true);
            setisVeri1(false);
            d("");
        } else {
            alert("Incorrect otp");
        }
    };
    const handleSubmit3 = (event) => {
        event.preventDefault();
        setisVeri(false);
        setisVeri1(false);
        isset(false);
        setfinal(true);
    };
    const handleSubmit4 = (event) => {
        event.preventDefault();
        setfinal(false);
        setbankD(true);
    };
    const handleSubmit5 = (event) => {
        event.preventDefault();
        if (bank === bank2) {
            setbankD(false);
            setnote(true);
            const apple = {
                aadhar,
                date,
                firstname,
                lastname,
                pan,
                email,
                bank,
                bank2,
                ifsc,
            };
            console.log(apple);
        } else {
            alert("bank number did not match");
        }
    };
    const inputNumber = (event) => {
        b(event.target.value);
    };
    const inputNumber1 = (event) => {
        d(event.target.value);
    };
    const pannumber = (event) => {
        setpan(event.target.value.toUpperCase());
    };
    const firstName = (event) => {
        setfirstname(event.target.value);
    };
    const lastName = (event) => {
        setlastname(event.target.value);
    };
    const emaiL = (event) => {
        setemail(event.target.value);
    };
    const aadharnumber = (event) => {
        const input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        setaadhar(input);
        // setaadhar(event.target.value);
    };
    const datE = (event) => {
        setdate(event.target.value);
    };
    const banknumber = (event) => {
        setbank(event.target.value.replace(/\D/g, ""));
    };
    const banknumber2 = (event) => {
        setbank2(event.target.value.replace(/\D/g, ""));
    };
    const ifsccode = (event) => {
        setifsc(event.target.value);
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
            <section className="account-open-sections ">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className="account-illus text-center">
                            <img
                                src="./images/account_open.png"
                                alt=""
                                className="img-fluid"
                            />
                        </Col>
                        {isVari && (
                            <Col md={6} className="centerMobile ml-5">
                                <h2 className="heading mt-2 mb-2">
                                    Signup now
                                </h2>
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
                                            pattern="[0-9]{10}"
                                            maxLength="10"
                                            title="Please enter a valid 10-digit mobile number"
                                        />
                                        <p className="help-text mt-3 subheading color-grey text-12">
                                            You will receive an OTP on your
                                            number
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                    <p className="text-12 mt-2 mb-3">
                                        <a href="/">
                                            Want to open an NRI account?
                                        </a>
                                    </p>
                                </form>
                            </Col>
                        )}
                        {!isVari && isVari1 && (
                            <Col md={6} className="centerMobile ml-5">
                                <h2 className="heading mt-2 mb-2">
                                    Confirm OTP
                                </h2>

                                <form onSubmit={handleSubmit2}>
                                    <div className="input-group mb-3 mt-3">
                                        <input
                                            type="tel"
                                            value={c}
                                            onChange={inputNumber1}
                                            className="form-control input1"
                                            required
                                            pattern="[0-9]{4}"
                                            maxLength="4"
                                            title="Please enter a valid 4-digit OTP"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        continue
                                    </button>
                                    {/* <p className="text-12 mt-2 mb-3">
                                        <a href="/">
                                            Want to open an NRI account?
                                        </a>
                                    </p> */}
                                </form>
                            </Col>
                        )}
                        {!isVari && !isVari1 && is && (
                            <Col md={6} className="centerMobile ml-5">
                                <form onSubmit={handleSubmit3}>
                                    <span className="m-0">pan number</span>
                                    <div className="input-group mb-3 ">
                                        <input
                                            type="tel"
                                            value={pan}
                                            onChange={pannumber}
                                            className="form-control "
                                            required
                                            maxLength={10}
                                            pattern="[a-zA-Z0-9]+"
                                            title="Please enter a valid PAN number"
                                        />
                                    </div>
                                    <span className="m-0 ">Dob</span>
                                    <input
                                        className="form-control  mb-3"
                                        type="date"
                                        onChange={datE}
                                        value={date}
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        continue
                                    </button>
                                    <p className="text-12 mt-2 mb-3">
                                        {/* <a href="/">
                                            Want to open an NRI account?
                                        </a> */}
                                    </p>
                                </form>
                            </Col>
                        )}
                        {!isVari && !isVari1 && !is && final && (
                            <Col md={6} className="centerMobile ml-5">
                                <form onSubmit={handleSubmit4}>
                                    <span className="m-0">Aadhar number</span>
                                    <div className="input-group mb-3 ">
                                        <input
                                            type="text"
                                            value={aadhar}
                                            onChange={aadharnumber}
                                            className="form-control "
                                            required
                                            pattern="[0-9]{12}"
                                            maxLength={12}
                                            title="Please enter a valid Aadhar number"
                                        />
                                    </div>
                                    <span className="m-0 ">First name</span>
                                    <input
                                        className="form-control  mb-3"
                                        type="text"
                                        onChange={firstName}
                                        required
                                        value={firstname}
                                        pattern="[A-Za-z]+"
                                        title="Please enter a valid first name without numbers or symbols"
                                        minLength={3}
                                    />
                                    <span className="m-0 ">Last name</span>
                                    <input
                                        className="form-control  mb-3"
                                        value={lastname}
                                        onChange={lastName}
                                        required
                                        type="text"
                                        pattern="[A-Za-z]+"
                                        title="Please enter a valid first name without numbers or symbols"
                                        minLength={3}
                                    />
                                    <span className="m-0 ">Email</span>
                                    <input
                                        className="form-control  mb-3"
                                        type="mail"
                                        onChange={emaiL}
                                        required
                                        value={email}
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                        title="Please enter a valid email address"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                    {/* <p className="text-12 mt-2 mb-3">
                                        <a href="/">
                                            Want to open an NRI account?
                                        </a>
                                    </p> */}
                                </form>
                            </Col>
                        )}
                        {!isVari && !isVari1 && !is && !final && bankD && (
                            <Col md={6} className="centerMobile ml-5">
                                <form onSubmit={handleSubmit5}>
                                    <div className="form-group">
                                        <label htmlFor="bank">
                                            Bank account number
                                        </label>
                                        <input
                                            type="text"
                                            id="bank"
                                            value={bank}
                                            onChange={banknumber}
                                            className="form-control"
                                            required
                                            pattern="[0-9]{15}"
                                            maxLength={15}
                                            title="Please enter a valid account number"
                                        />
                                    </div>
                                    <span className="m-0">
                                        conform back account number
                                    </span>
                                    <div className="input-group mb-3 ">
                                        <input
                                            type="text"
                                            value={bank2}
                                            onChange={banknumber2}
                                            className="form-control "
                                            required
                                            pattern="[0-9]{15}"
                                            maxLength={15}
                                            title="Please enter a valid account number"
                                        />
                                    </div>
                                    <span className="m-0 ">IFSC code</span>
                                    <input
                                        className="form-control  mb-3"
                                        type="text"
                                        onChange={ifsccode}
                                        required
                                        value={ifsc}
                                        // pattern="[A-Za-z]{4}[0][A-Za-z0-9]{6}"
                                        minLength={10}
                                        title="Please enter a valid IFSC code"
                                    />

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                    {/* <p className="text-12 mt-2 mb-3">
                                        <a href="/">
                                            Want to open an NRI account?
                                        </a>
                                    </p> */}
                                </form>
                            </Col>
                        )}
                        {!isVari && !isVari1 && !is && !final && note && (
                            <Col md={6} className="centerMobile ml-5">
                                <div className="outp input1">
                                    <h3>
                                        we will get back to you soon via
                                        email...
                                    </h3>
                                </div>
                            </Col>
                        )}
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
                        <a target="_blank" href="/">
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
