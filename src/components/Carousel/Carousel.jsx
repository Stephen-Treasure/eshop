import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className={styles.center}>
                        <img
                            className={styles.img}
                            src="https://cdn.shopify.com/s/files/1/0965/9006/products/00_2e6bf15b-67f4-4fd2-9ed1-badcb1cdfe85.jpg?v=1659415793"
                            alt=""
                        />
                    </div>
                    <div className={styles.center}>
                        <img
                            className={styles.img}
                            src="https://cdn.shopify.com/s/files/1/0965/9006/products/00_cca899ba-fe1d-4d40-80e5-9e0c10890514.jpg?v=1659416882"
                            alt=""
                        />
                    </div>
                    <div className={styles.center}>
                        <img
                            className={styles.img}
                            src="https://cdn.shopify.com/s/files/1/0965/9006/products/04_3cf1d345-ab7f-435d-b6c7-0d54126e779b_1024x1024.jpg?v=1659415483"
                            alt=""
                        />
                    </div>
                    <div className={styles.center}>
                        <img
                            className={styles.img}
                            src="https://cdn.shopify.com/s/files/1/0965/9006/products/03_ca59b633-0b2b-4e36-88af-fec3c52370c3_1024x1024.jpg?v=1659416942"
                            alt=""
                        />
                    </div>
                    <div className={styles.center}>
                        <img
                            className={styles.img}
                            src="https://cdn.shopify.com/s/files/1/0965/9006/products/WrapFlex_a89100ec-c584-46e2-87f6-1f62987b861c_1024x1024.jpeg?v=1540523420"
                            alt=""
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}
