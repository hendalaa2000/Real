import { Col, Image, Row } from "react-bootstrap";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import "../Contact/Contact.css";
export default function Contact(){
    return(
        <>
            <section className="c-wrapper">
                <div className="container">
                    <Row>
                        <Col lg={6}>
                            <div class="r-head">
                                <h3 class="orangeText">Our Contact Us</h3>
                                <span class="primaryText">Easy to contact us</span>
                                <span class="secondaryText">
                                    We always ready to help by providijng the best services for
                                    you.
                                    <br />
                                    We beleive a good blace to live can make your life better
                                </span>
                            </div>
                            <div className="contact-mode">
                                <Row>
                                    <Col lg={6} md={6} xs={12}>
                                        <div className="mode">
                                            <div className="mode-t">
                                                <div className="icon">
                                                    <MdCall size={25}/>
                                                </div>
                                                <div className="detail">
                                                    <span class="primaryText">Call</span>
                                                    <span class="secondaryText">021 123 145 14</span>
                                                </div>
                                            </div>
                                            <div className="mode-button">
                                                <button className="button">Call Now</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <div className="mode">
                                            <div className="mode-t">
                                                <div className="icon">
                                                    <BsFillChatDotsFill size={25}/>
                                                </div>
                                                <div className="detail">
                                                    <span class="primaryText">Chat</span>
                                                    <span class="secondaryText">021 123 145 14</span>
                                                </div>
                                            </div>
                                            <div className="mode-button">
                                                <button className="button">Chat Now</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <div className="mode">
                                            <div className="mode-t">
                                                <div className="icon">
                                                    <BsFillChatDotsFill size={25}/>
                                                </div>
                                                <div className="detail">
                                                    <span class="primaryText">Video Call</span>
                                                    <span class="secondaryText">021 123 145 14</span>
                                                </div>
                                            </div>
                                            <div className="mode-button">
                                                <button className="button">Video Call Now</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <div className="mode">
                                            <div className="mode-t">
                                                <div className="icon">
                                                    <HiChatBubbleBottomCenter size={25}/>
                                                </div>
                                                <div className="detail">
                                                    <span class="primaryText">Message</span>
                                                    <span class="secondaryText">021 123 145 14</span>
                                                </div>
                                            </div>
                                            <div className="mode-button">
                                                <button className="button">Message Now</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="image-container animate__animated animate__bounceInRight">
                                <Image src="./contact.jpg" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}