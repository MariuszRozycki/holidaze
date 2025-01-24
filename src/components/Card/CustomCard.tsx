import { useNavigate } from "react-router-dom";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  handleImageError,
  getImageUrl,
  getTrimCountryName,
  getTrimCityName,
  getTrimVenueName,
  getFullVenueName,
  getPricePerNight,
} from "../../utils/index";
import { Venue } from "../../types/api";

import "./CustomCard.scss";

type CustomCardProps = {
  venue: Venue;
};

const CustomCard = ({ venue }: CustomCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/holidaze/venue-by-id/${venue.id}`);
  };

  return (
    <Card className='w-100 rounded-4 position-relative' onClick={handleClick}>
      <Card.Img
        className='card-by-offers-type object-fit-cover rounded-4 swiper-lazy'
        variant='top'
        src={getImageUrl(venue)}
        alt={venue.name}
        onError={handleImageError}
        loading='lazy'
      />
      <OverlayTrigger
        placement='top'
        overlay={
          <Tooltip className='fs-4' id={`tooltip-${venue.id}`} style={{ zIndex: 9999 }}>
            {getFullVenueName(venue)},
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
        <Card.Body className='d-flex flex-column justify-content-between px-0'>
          <div className='text-wrapper mb-0'>
            <Card.Title className='h1'>
              <p className='fs-5 fs-md-1 d-flex justify-content-between mb-0'>
                {getTrimVenueName(venue)}
                <span>
                  <i className='bi bi-star-fill text-warning fs-5 me-1'></i>
                  {venue.rating}
                </span>
              </p>
            </Card.Title>
            <div>
              <div className='slider-item-details mt-0'>
                <div className='slider-item-location-details'>
                  <p className='fs-4 mb-1'>
                    {getTrimCountryName(venue)}, {getTrimCityName(venue)},
                  </p>
                  <p className='fs-4'>
                    <span className='me-2'>{getPricePerNight(venue)} euro/</span>
                    night
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
