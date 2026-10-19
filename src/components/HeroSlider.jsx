import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import banner1 from "../img/banner_Hero1.jpg";
import banner2 from "../img/banner_Hero2.jpg";
import banner3 from "../img/banner_Hero3.jpg";

export default function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Interoducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 controlier{" "}
                </h3>
                <p>Windows Xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={banner1} alt="slider image" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Interoducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 controlier{" "}
                </h3>
                <p>Windows Xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={banner2} alt="slider image" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Interoducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 controlier{" "}
                </h3>
                <p>Windows Xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={banner3} alt="slider image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
