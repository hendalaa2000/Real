import { Accordion, Col, Image, Row } from "react-bootstrap";
import "../Value/Value.css";
import data from "../../utils/accordion";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { useState } from "react";
export default function Value() {
    const [isClick, setIsClick] = useState(false);
    const handleClick = () => {
        setIsClick(!isClick);
    }
    
    return (
        <>
            <section className="v-wrapper">
                <div className="container">
                    <Row>
                        <Col lg={6} >
                            <div className="image-container animate__animated animate__bounceInLeft">
                                <Image src="./value.png" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div class="r-head">
                                <h3 class="orangeText">Our Value</h3>
                                <span class="primaryText">Value We Give to You</span>
                                <span class="secondaryText">
                                    We always ready to help by providijng the best services for
                                    you.
                                    <br />
                                    We beleive a good blace to live can make your life better
                                </span>
                            </div>
                            <Accordion>
                                {data.map((item, index) => (
                                    <Accordion.Item key={index} eventKey={index}>
                                        <Accordion.Header>
                                            <div className="icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="icon" onClick={handleClick}>
                                                {isClick ?  <MdOutlineArrowDropDown size={23} /> : <MdOutlineArrowDropUp size={23}/>}
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="secondaryText">
                                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                                cupidatat occaecat ut occaecat consequat est minim minim
                                                esse tempor laborum consequat esse adipisicing eu
                                                reprehenderit enim.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
}
