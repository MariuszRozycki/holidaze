import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Venue } from "../../types/api.js";
import CustomModal from "../Modals/CustomImageModal/CustomImageModal.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { getFullVenueName } from "../../utils/index.js";
import noImage from "../../assets/images/no-image.webp";
import breakpoints from "../../scss/global/breakpoints.js";
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
            loop={true}
            touchReleaseOnEdges={true}
            speed={1500}
            threshold={1}
            cssMode={false}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            breakpoints={{
              [breakpoints.sm]: { slidesPerView: 1 },
              [breakpoints.md]: { slidesPerView: 1 },
              [breakpoints.lg]: { slidesPerView: 3 },
              [breakpoints.xl]: { slidesPerView: 4 },
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

            <div className='swiper-button-prev fw-bold'></div>
            <div className='swiper-button-next fw-bold'></div>
            <div className='swiper-pagination fw-bold'></div>
            <div className='swiper-number-of-slides rounded-3 text-primary fw-semibold'>
              <p className='m-0'>
                Slide {currentIndex + 1} of {arrayOfImages.length || 1}
              </p>
            </div>
          </Swiper>
        </Col>
      </Row>

      {currentImage && (
        <CustomModal show={show} venueName={getFullVenueName(selectedVenue)} onHide={() => setShow(false)} img={currentImage} />
      )}
    </section>
  );
};

export default CustomSwiper;
