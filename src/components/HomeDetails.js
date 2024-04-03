import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import sliderimg_1 from "../assets/sliderimg_1.jpg";
import sliderimg_2 from "../assets/sliderimg_2.jpg";
import sliderimg_3 from "../assets/sliderimg_3.jpg";
import sliderimg_4 from "../assets/sliderimg_4.jpg";
import sliderimg_5 from "../assets/sliderimg_5.jpg";
import sliderimg_6 from "../assets/sliderimg_6.jpg";
import sliderimg_7 from "../assets/sliderimg_7.jpg";
const HomeDetails = () => {
    return (
        <>
            <div className="container-fluid custom-container-fluid">
                <div className="row">
                <Carousel>
                    <Carousel.Item>
                        <img src={sliderimg_1} alt="First slide" className="img-hw"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={sliderimg_2} alt="Second slide" className="img-hw"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={sliderimg_3} alt="Third slide" className="img-hw"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={sliderimg_4} alt="Fourth slide" className="img-hw"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={sliderimg_5} alt="Fifth slide" className="img-hw"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={sliderimg_6} alt="Sixth slide" className="img-hw"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={sliderimg_7} alt="Sixth slide" className="img-hw"/>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </>
    )
}
export default HomeDetails