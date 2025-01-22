import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Venue } from "../../types/api.js";
import CustomModal from "../CustomModal/CustomModal.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import noImage from "../../assets/images/no-image.webp";
import breakpoints from "../../styles/breakpoints.js";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "./CustomSwiper.scss";

type CustomSwiperProps = {
  isLoading: boolean;
  isError: string | null;
  selectedVenue: Venue | null;
};

const CustomSwiper = ({ isLoading, isError, selectedVenue }: CustomSwiperProps) => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const arrayOfImages = selectedVenue?.media || [];

  const openModalHandle = (img: string) => {
    setCurrentImage(img);
    setShow(true);
  };

  if (isLoading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  if (isError)
    return (
      <Container>
        <p>Error loading data: {isError}</p>
      </Container>
    );

  return (
    <section className='swiper mt-5'>
      <Row>
        <Col>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            spaceBetween={10}
            slidesPerView={1}
            loop={false}
            touchReleaseOnEdges={true}
            speed={1500}
            threshold={1}
            cssMode={false}
            breakpoints={{
              [breakpoints.sm]: { slidesPerView: 2.2 },
              [breakpoints.md]: { slidesPerView: 2.2 },
              [breakpoints.lg]: { slidesPerView: 3.2 },
              [breakpoints.xl]: { slidesPerView: 4.2 },
            }}
            grabCursor
          >
            {arrayOfImages.length === 0 ? (
              <SwiperSlide key='no-image' className='border-0 slider-item rounded-4'>
                <div className='swiper-zoom-container border-0'>
                  <Image src={noImage} alt='No image available' className='no-img' />
                </div>
              </SwiperSlide>
            ) : (
              arrayOfImages.map((img, index) => (
                <SwiperSlide key={index} className='border-0 slider-item rounded-4'>
                  <div className='swiper-zoom-container border-0'>
                    <Image src={img.url} alt={selectedVenue?.name} onClick={() => img.url && openModalHandle(img.url)} />
                  </div>
                </SwiperSlide>
              ))
            )}

            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
            <div className='swiper-pagination'></div>
          </Swiper>
        </Col>
      </Row>

      {currentImage && <CustomModal show={show} onHide={() => setShow(false)} img={currentImage} />}
    </section>
  );
};

export default CustomSwiper;
