import { Col, Image, Row } from "react-bootstrap";
import "../Footer/Footer.css";
export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container">
                <Row>
                        <div className="col-lg-6 col-md-6">
                            <Image src="./logo2.png" alt="logo" style={{ width: "120" }} />
                            <span class="secondaryText">
                                Our vision is to make all people <br />
                                the best place to live for them.
                            </span>
                        </div>
                        <div className="col-lg-6  col-md-6 d-flex justify-content-end">
                            <div className="f-right ">
                                <span class="primaryText">Information</span>
                                <span class="secondaryText">145 New York, FL 5467, USA</span>
                                <div class="f-menu">
                                    <a href="#">Property</a>
                                    <a href="#">Services</a>
                                    <a href="#">Product</a>
                                    <a href="#">About Us</a>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    );
}
