import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
function Dashboard55() {
    return (
        <div className="app-wrapper">
            <div id="app" className="app mobile page-dashboard">
                <div className="header">
                    <div className="wrapper">
                        <div className="header-right">
                            <a href="/" className="logo">
                                <img
                                    src="/static/images/kite-logo.svg"
                                    alt="Kite logo"
                                />
                            </a>
                            <div className="current-nav">Dashboard</div>
                            <div className="right-nav">
                                <div className="bulletin-menu">
                                    <a className="bulletin-widget">
                                        <span className="icon icon-bell"></span>
                                    </a>
                                </div>
                                <div className="user-nav perspective">
                                    <a href="" className="dropdown-label">
                                        <div id="avatar-43">
                                            <div className="avatar">
                                                <span>AK</span>
                                            </div>
                                        </div>
                                        <span className="user-id">LTJ473</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Container className="wrapper">
                    <div className="container-right">
                        <div className="page-content dashboard">
                            <div className="dashboard">
                                <h1 className="page-title big">
                                    Hi,{" "}
                                    <span className="nickname">Arvinder</span>
                                </h1>
                                <div className="margins-stats stats-block">
                                    <Row>
                                        <Col
                                            md={6}
                                            className="margin-block first"
                                        >
                                            <div className="secondary-title">
                                                <span className="icon icon-pie-chart"></span>
                                                <span>equity</span>
                                            </div>
                                            <Row>
                                                <Col
                                                    md={5}
                                                    className="primary-stats m5"
                                                >
                                                    <div className="value">
                                                        <span
                                                            data-balloon="₹0.00"
                                                            data-balloon-pos="up"
                                                        >
                                                            0
                                                        </span>
                                                    </div>
                                                    <div className="label">
                                                        Margin available
                                                    </div>
                                                </Col>
                                                <Col
                                                    md={7}
                                                    className="secondary-stats m7"
                                                >
                                                    <div className="block">
                                                        <span className="label">
                                                            Margins used
                                                        </span>
                                                        <span className="value">
                                                            <span
                                                                data-balloon="₹0.00"
                                                                data-balloon-pos="up"
                                                            >
                                                                0
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="block">
                                                        <span className="label">
                                                            Opening balance
                                                        </span>
                                                        <span className="value">
                                                            <span
                                                                data-balloon="₹0.00"
                                                                data-balloon-pos="up"
                                                            >
                                                                0
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <a
                                                        target="_blank"
                                                        href="https://console.zerodha.com/funds/statement?segment=equity&amp;src=kiteweb"
                                                        className="view-statement-link block"
                                                    >
                                                        <span className="icon">
                                                            <img
                                                                src="/static//images/console.svg"
                                                                style={{
                                                                    height: "9px",
                                                                }}
                                                            />
                                                        </span>{" "}
                                                        <span>
                                                            View statement
                                                        </span>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} className="margin-block">
                                            <div className="secondary-title">
                                                <span className="icon icon-droplet"></span>
                                                <span>commodity</span>
                                            </div>
                                            <Row>
                                                <Col
                                                    md={5}
                                                    className="primary-stats m5"
                                                >
                                                    <div className="value">
                                                        <span
                                                            data-balloon="₹0.00"
                                                            data-balloon-pos="up"
                                                        >
                                                            0
                                                        </span>
                                                    </div>
                                                    <div className="label">
                                                        Margin available
                                                    </div>
                                                </Col>
                                                <Col
                                                    md={7}
                                                    className="secondary-stats m7"
                                                >
                                                    <div className="block">
                                                        <span className="label">
                                                            Margins used
                                                        </span>
                                                        <span className="value">
                                                            <span
                                                                data-balloon="₹0.00"
                                                                data-balloon-pos="up"
                                                            >
                                                                0
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="block">
                                                        <span className="label">
                                                            Opening balance
                                                        </span>
                                                        <span className="value">
                                                            <span
                                                                data-balloon="₹0.00"
                                                                data-balloon-pos="up"
                                                            >
                                                                0
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <a
                                                        target="_blank"
                                                        href="https://console.zerodha.com/funds/statement?segment=commodity&amp;src=kiteweb"
                                                        className="view-statement-link block"
                                                    >
                                                        <span className="icon">
                                                            <img
                                                                src="/static//images/console.svg"
                                                                style={{
                                                                    height: "9px",
                                                                }}
                                                            />
                                                        </span>{" "}
                                                        <span>
                                                            View statement
                                                        </span>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Dashboard55;
