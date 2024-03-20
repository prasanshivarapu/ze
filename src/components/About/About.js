import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import { MdKeyboardArrowDown } from "react-icons/md";

function About() {
  return (
    <div className="intro1 ">
      <section>
        <Container>
          <Row className="mt-5 mb-5 p-5">
            <Col md={12}>
              <div className="text-center intro">
                <h2 className="heading mb-5">
                  We pioneered the discount broking model in India. Now, we are
                  breaking ground with our technology.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container>
          <Row className="justify-content- mt-5 mb-5">
            <Col md={6}>
              <p>
                We kick-started operations on the 15th of August, 2010 with the
                goal of breaking all barriers that traders and investors face in
                India in terms of cost, support, and technology. We named the
                company Zerodha, a combination of Zero and "Rodha", the Sanskrit
                word for barrier.
              </p>
              <p>
                Today , our disruptive pricing models and in-house technology
                have made us the biggest stock broker in India.
              </p>
              <p>
                Over 1+ Crore clients place millions of orders every day through
                our powerful ecosystem of investment platforms, contributing
                over 15% of all Indian retail trading volumes.
              </p>
            </Col>
            <Col md={6}>
              <p>
                In addition, we run a number of popular open online educational
                and community initiatives to empower retail traders and
                investors.
              </p>
              <p>
                <a href="/">Rainmatter</a>, our fintech fund and incubator, has
                invested in several fintech startups with the goal of growing
                the Indian capital markets.
              </p>
              <p>
                And yet, we are always up to something new every day. Catch up
                on the latest updates on our
                <a href="/">blog</a> or see what the media is
                <a href="/">saying about us</a>.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <div className=" mt-3 mb-5">
          <h2 className="text-center">People</h2>
          <Row className="justify-content- ceo-container">
            <Col md={5} className="text-center">
              <img
                className="fimage"
                src="./images/nithin-kamath.jpg"
                alt="Nithin Kamath, CEO"
              />
              <h5>Nithin Kamath</h5>
              <p className="text-grey">Founder, CEO</p>
            </Col>
            <Col md={7}>
              <div className="intro">
                <p>
                  Nithin bootstrapped and founded Zerodha in 2010 to overcome
                  the hurdles he faced during his decade-long stint as a trader.
                  Today, Zerodha has changed the landscape of the Indian broking
                  industry.
                </p>
                <p>
                  He is a member of the SEBI Secondary Market Advisory Committee
                  (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p>Playing basketball is his zen.</p>
                <p>
                  Connect on
                  <a target="_blank" href="/">
                    Homepage
                  </a>
                  /
                  <a target="_blank" href="/">
                    TradingQnA
                  </a>
                  /
                  <a target="_blank" href="/">
                    Twitter
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="row ">
          <Col md={4} className="text-center">
            <div className="intro">
              <img
                className="ffimage"
                src="./images/Nikhil.jpg"
                alt="Nikhil Kamath, Chief Investment Officer"
              />
              <h5>Nikhil Kamath</h5>
              <p className="text-grey">Co-founder & CFO</p>
              <p className="text-grey ">
                <a href="/">
                  Bio <i className="icon-angle-down"></i>
                </a>
              </p>
              <div className="intro">
                <p>
                  Nikhil is an astute and experienced investor, and he heads
                  financial planning at Zerodha. An avid reader, he always
                  appreciates a good game of chess.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="intro">
              <img
                className="ffimage"
                src="./images/Kailash.jpg"
                alt="Dr. Kailash Nadh, CTO"
              />
              <h5>Dr. Kailash Nadh</h5>
              <p className="text-grey">CTO</p>
              <p className="text-grey ">
                <a href="/">
                  Bio <i className="icon-angle-down"></i>
                </a>
              </p>
              <div className="team-featured-desc text-left">
                <p>
                  Kailash has a PhD in Artificial Intelligence & Computational
                  Linguistics, and is the brain behind all our technology and
                  products. He has been a developer from his adolescence and
                  continues to write code every day.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="intro">
              <img className="ffimage" src="./images/Venu.jpg" alt="/" />
              <h5>Venu Madhav</h5>
              <p className="text-grey">COO</p>
              <p className="text-grey ">
                <a href="/">
                  Bio <i className="icon-angle-down"></i>
                </a>
              </p>
              <div className="team-featured-desc text-left">
                <p>
                  Venu is the backbone of Zerodha taking care of operations and
                  ensuring that we are compliant to rules and regulations. He
                  has over a dozen certifications in financial markets and is
                  also proficient in technical analysis. Workouts, cycling, and
                  adventuring is what he does outside of Zerodha.
                </p>
              </div>
            </div>
          </Col>

          <Col md={4} className="text-center">
            <div className="intro">
              <img
                className="ffimage"
                src="./images/Hanan.jpg"
                alt="Chief of Client Relations"
              />
              <h5>Hanan Delvi</h5>
              <p className="text-grey">CCO</p>
              <p className="text-grey ">
                <a href="/">
                  Bio{" "}
                  <button className="but">
                    <MdKeyboardArrowDown />
                  </button>
                </a>
              </p>
              <div className="team-featured-desc text-left">
                <p>
                  We take pride in the way we support our clients, and Hanan is
                  responsible for this with his never-ending flow of energy. He
                  is the man behind many of our support initiatives that have
                  helped us stay ahead of the game. A free thinker, Hanan can be
                  seen posing as one in his free time.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="intro">
              <img
                className="ffimage"
                src="./images/Seema.jpg"
                alt="Seema Patil, Director"
              />
              <h5>Seema Patil</h5>
              <p className="text-grey">Director</p>
              <p className="text-grey ">
                <a href="/">
                  Bio <i className="icon-angle-down"></i>
                </a>
              </p>
              <div className="team-featured-desc text-left">
                <p>
                  Seema who has led the quality team since the beginning of
                  Zerodha, is now a director. She is an extremely disciplined
                  fitness enthusiast.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="intro">
              <img
                className="ffimage"
                src="./images/karthik.jpg"
                alt="Karthik Rangappa, Chief of Education"
              />
              <h5>Karthik Rangappa</h5>
              <p className="text-grey">Chief of Education</p>
              <p className="text-grey ">
                <a href="/">
                  Bio <i className="icon-angle-down"></i>
                </a>
              </p>
              <div className="team-featured-desc text-left">
                <p>
                  Karthik "Guru" Rangappa single-handedly wrote Varsity,
                  Zerodha's massive educational program. He heads investor
                  education initiatives at Zerodha and loves stock markets,
                  classic rock, single malts, and photography.
                </p>
              </div>
            </div>
          </Col>

          <Col md={4} className="text-center">
            <div className="intro">
              <img className="ffimage" src="./images/Austin.jpg" alt="" />
              <h5>Austin Prakesh</h5>
              <p className="text-grey">Director Strategy</p>
              <p className="text-grey ">
                <a href="/">
                  Bio <i className="icon-angle-down"></i>
                </a>
              </p>
              <div className="team-featured-desc text-left">
                <p>
                  Austin is a successful self-made entrepreneur from Singapore.
                  His area of specialty revolves around helping organisations
                  including grow by optimizing revenue streams and creating
                  growth strategies. He is a boxing enthusiast and loves
                  collecting exquisite watches.
                </p>
              </div>
            </div>
          </Col>
        </div>
      </section>
    </div>
  );
}

export default About;
