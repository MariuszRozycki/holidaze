import { Container, Row, Col, Image } from "react-bootstrap";
import { Venue } from "../../types/api.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import breakpoints from "../../styles/breakpoints.js";
import { CustomCard } from "../index.js";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "./CustomSwiper.scss";

type CustomSwiperProps = {
  isLoading: boolean;
  isError: string | null;
  selectedVenue: Venue | null;
};

const CustomSwiper = ({ isLoading, isError, selectedVenue }: CustomSwiperProps) => {
  console.log("Hi! Selected venue from CustomSwiper", selectedVenue, "typeof", typeof selectedVenue);

  const arrayOfImages = selectedVenue?.media || [];

  if (isLoading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  if (isError)
    return (
      <Container>
        <p>Error loading data: {}</p>
      </Container>
    );

  return (
    <section className='swiper mt-5'>
      <Row>
        <Col>
          <h2 className='mb-3 fw-semibold fst-italic'>Nasze wycieczki:</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            touchReleaseOnEdges={true}
            speed={1500}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay]}
            threshold={1}
            cssMode={false}
            // breakpoints={{
            //   [breakpoints.sm]: { slidesPerView: 2.2 },
            //   [breakpoints.md]: { slidesPerView: 2.2 },
            //   [breakpoints.lg]: { slidesPerView: 3.2 },
            //   [breakpoints.xl]: { slidesPerView: 4.2 },
            // }}
            grabCursor
          >
            {arrayOfImages.map((img, index) => (
              <SwiperSlide key={index} className='border-0 slider-item rounded-4'>
                <div className='swiper-zoom-container border-0'>
                  <Image src={img.url} alt={selectedVenue?.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </section>
  );
};

export default CustomSwiper;
