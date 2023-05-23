import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Col, Row } from "react-bootstrap";
import "./Residencies.css";
import data  from "../../utils/Slider.json"
import { sliderSetting } from "../../common";

export default function Residencies() {
    return (
        <>
            <section className="r-wrapper">
                <div className="container" style={{ overflow: "hidden" }}>
                    <Row>
                        <Col lg={12}>
                            <div class="r-head">
                                <h3 class="orangeText">Best Choices</h3>
                                <span class="primaryText">Popular Residencies</span>
                            </div>
                        </Col>
                    </Row>
                    <Swiper
                        modules={[Navigation]}
                        className="mySwiper"
                        {...sliderSetting}
                    >
                    <Row>
                        <Col lg={3} md={4}>
                        {data.map((card,index)=>(
                            <SwiperSlide key={index}>
                                <div class="r-card animate__animated animate__fadeInDown">
                                            <img src={card.image} alt="home" />
                                            <span class="secondaryText r-price">
                                                <span style={{ color: "orange" }}>$</span>
                                                <span>{card.price}</span>
                                            </span>
                                            <span class="primaryText title">{card.name}</span>
                                            <span class="secondaryText desc">
                                                {card.detail}
                                            </span>
                                        </div>
                            </SwiperSlide>
                            ))}
                        </Col>
                    </Row>
                        <SlideButton />
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export const SlideButton = () => {
    const swiper = useSwiper();

    return (
        <div className="c-Button">
            <button className="prev" onClick={() => swiper.slidePrev()}>
                &lt;
            </button>
            <button className="next" onClick={() => swiper.slideNext()}>
                &gt;
            </button>
        </div>
    );
};
