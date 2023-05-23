import { Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import "../Hero/Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";

export default function Hero() {
  return (
    <>
      <section className="hero-wrapper">
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <div className="hero-container">
                <div className="hero-title">
                    <div className="orange-circle"/>
                  <h1 className="animate__animated animate__bounce">
                    Discover <br /> Most Suitable <br />
                    Property
                  </h1>
                </div>
                <div className="hero-desc">
                    <span>Find a variety of properties that suit you very easilty</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className="search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text"/>
                    <button className="button">Search</button>
                </div>
                <div className="stats">
                    <div className="stat">
                        <span className="num">
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span className="plus">+</span>
                        </span>
                        <span className="text">Premium Product</span>
                    </div>
                    <div className="stat">
                        <span className="num">
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span className="plus">+</span>
                        </span>
                        <span className="text">Happy Customer</span>
                    </div>
                    <div className="stat">
                        <span className="num">
                            <CountUp end={28}/>
                            <span className="plus">+</span>
                        </span>
                        <span  className="text">Awards Winning</span>
                    </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="image-container animate__animated  animate__bounceInRight">
                <Image src="./hero-image.png"  />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
