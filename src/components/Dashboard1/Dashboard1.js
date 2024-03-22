import React, { useEffect } from "react";
import "./dashboard1.css";
import { Col, Container, Row } from "react-bootstrap";

function Dashboard1() {
    useEffect(() => {
        const fetchingData = async () => {
            const data = await fetch("http://localhost:5001/financial-data");
            const res = await data.json();
            console.log(res);
        };
        fetchingData();
    }, []);
    return (
        <section style={{ backgroundColor: "transparent" }}>
            <Container fluid>
                <Row>
                    <Col md={4} className="d-flex  ide">
                        <div className="inner text-center">
                            <p className="inner1">NIFTY 2024</p>
                            <p className="inner1">SENSEX 2024</p>
                        </div>
                    </Col>
                    <Col md={8} className="">
                        <h1>inner dashboard</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Dashboard1;
