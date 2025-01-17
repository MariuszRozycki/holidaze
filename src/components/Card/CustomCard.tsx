import { useRef } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { trimText, handleImageError, getImageUrl } from "../../utils/index";
import { useElementWidth, useNavigateToElement } from "../../hooks";
import { Venue } from "../../types/api";
import "./CustomCard.scss";

type CustomCardProps = {
  venue: Venue;
};

const CustomCard = ({ venue }: CustomCardProps) => {
  console.log(venue);

  const elementRef = useRef(null);
  const containerWidth = useElementWidth(elementRef);
  // const locationPath = "#";
  // const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <Card
      className='w-100 rounded-4 position-relative'
      // onClick={() => handleNavigate(venue.id)}
    >
      <Card.Img
        className='card-by-offers-type object-fit-cover rounded-4 rounded-bottom-0 swiper-lazy'
        variant='top'
        style={{ height: "180px" }}
        src={getImageUrl(venue)}
        alt={venue.name}
        // onError={handleImageError}
        loading='lazy'
      />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <div className='text-wrapper'>
          <OverlayTrigger placement='top' overlay={<Tooltip id={`tooltip-${venue.id}`}>{venue.name}</Tooltip>}>
            <Card.Title className='h6'>
              {containerWidth < 315 ? trimText({ text: venue.name, maxLength: 27 }) : venue.name}
            </Card.Title>
          </OverlayTrigger>
          <div>
            <div className='slider-item-details mt-2'>
              <div className='details-description'></div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
