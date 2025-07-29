import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Container from '@/components/Container'
import CardProduct from '@/components/CardProduct'

import style from './ProductCarousel.module.css'


const ProductCarousel = ({ products, title }) => {
  return (
    <Container classname={style.container_Carousel}>
      <h2 className={style.Carousel_titulo}>{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={45}
        breakpoints={{
          400:{ slidesPerView: 1},
          470:{ slidesPerView: 1.5},
          660: { slidesPerView: 2},
          768: { slidesPerView: 2.5},
          1024: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
        }}
        className="product-carousel"
        style={{
          paddingLeft: "35px",
          paddingRight: "45px",
         
          
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardProduct {...product} />
          </SwiperSlide>
        ))}
      
      </Swiper>
    </Container>
  );
};

export default ProductCarousel;
