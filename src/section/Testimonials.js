import React from "react";
import { Container, Image } from "react-bootstrap";

import { opinions } from "../data/opinions";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Opinions from "../components/Opinions";

const Testimonials = () => {
  return (
    <section className="Testimonials" id='Testimonials'>
      <Container> 
        <div className="ServicesTitle">
          <div className="ServicesInfo">
            <h1 className="title">Our customers' opinions</h1>
            <p className="mainParagraph">
              <span>00/ </span> We will devote our efforts to improving your
              site experience. We are here to provide you with advanced design
              services and professional programming, with the aim of achieving
              maximum performance and improving your site.
            </p>
          </div>
          <div className="Servicesimg">
            <Image
              alt="brandImg"
              loading="lazy"
              src="sources/img/Opinion-amico 2.png"
              fluid
            />
          </div>
        </div>

        <div className="clientOpinions">
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {opinions.map((opinion, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Opinions opinion={opinion} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
