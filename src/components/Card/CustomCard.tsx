import { useRef } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  handleImageError,
  getImageUrl,
  getTrimCountryName,
  getTrimCityName,
  getFullCountryName,
  getFullCityName,
  getTrimVenueName,
  getFullVenueName,
  getPricePerNight,
  getMaxGuests,
} from "../../utils/index";
import { useElementWidth } from "../../hooks";
import { Venue } from "../../types/api";
import "./CustomCard.scss";

type CustomCardProps = {
  venue: Venue;
};

const CustomCard = ({ venue }: CustomCardProps) => {
  console.log(venue);

  const elementRef = useRef(null);
  const containerWidth = useElementWidth(elementRef);

  return (
    <Card className='w-100 rounded-4 position-relative'>
      <Card.Img
        className='card-by-offers-type object-fit-cover rounded-4 rounded-bottom-0 swiper-lazy'
        variant='top'
        style={{ height: "180px" }}
        src={getImageUrl(venue)}
        alt={venue.name}
        onError={handleImageError}
        loading='lazy'
      />
      <OverlayTrigger
        placement='top'
        overlay={
          <Tooltip id={`tooltip-${venue.id}`} style={{ zIndex: 9999 }}>
            {getFullVenueName(venue)}, {getFullCountryName(venue)}, {getFullCityName(venue)}
          </Tooltip>
        }
        trigger={["hover", "focus"]}
        popperConfig={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 0],
              },
            },
          ],
        }}
      >
        <Card.Body className='d-flex flex-column justify-content-between'>
          <div className='text-wrapper'>
            <Card.Title className='h6'>{containerWidth < 315 ? getTrimVenueName(venue) : getFullVenueName(venue)}</Card.Title>
            <div>
              <div className='slider-item-details mt-2'>
                <div className='slider-item-location-details'>
                  <p className='fw-semibold mb-1'>
                    {getTrimCountryName(venue)}, {getTrimCityName(venue)}
                  </p>
                  <p className='fw-semibold mb-1'>
                    <i className='bi bi-people-fill'></i>: max {getMaxGuests(venue)}
                  </p>
                  <p className='fw-semibold'>
                    <i className='bi bi-currency-euro'></i> {getPricePerNight(venue)} /night
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </OverlayTrigger>
    </Card>
  );
};

export default CustomCard;
