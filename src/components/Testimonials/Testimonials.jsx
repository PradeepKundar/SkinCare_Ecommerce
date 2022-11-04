import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.left}>
          <span>top rated</span>
          <span>
            seedily say has suitable disposal and boy. exercise joy man children
            rejoiced
          </span>
        </div>
        <img src={Hero} alt="" />
        <div className={css.right}>
          <span>100K</span>
          <span>happy customers with us</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
