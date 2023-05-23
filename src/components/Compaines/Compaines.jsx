import { Col, Image, Row } from "react-bootstrap";
import "./Compaines.css";
export default function Compaines() {
    return (
        <>
            <section className="Compaines">
                <div className="container">
                    <Row className="g-4">
                        <Col lg={3} md={3} xs={6} className="text-center">
                            <Image src="/prologis.png"/>
                        </Col>
                        <Col lg={3} md={3} xs={6}  className="text-center">
                            <Image src="/tower.png"/>
                        </Col>
                        <Col lg={3} md={3} xs={6}  className="text-center">
                            <Image src="/equinix.png"/>
                        </Col>
                        <Col lg={3} md={3} xs={6}  className="text-center">
                            <Image src="/realty.png"/>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
}
