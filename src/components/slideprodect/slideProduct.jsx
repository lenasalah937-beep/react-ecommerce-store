import Product from "./Product";
import "./slideProduct.css";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
export default function SlideProduct({ data, title }) {
  return (
    <div className="slide-products slide">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>Check out our latest products!</p>
        </div>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
