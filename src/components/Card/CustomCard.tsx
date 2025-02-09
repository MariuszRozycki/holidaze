import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useAppContext } from "../../context/app/useAppContext";
import { useElementWidth, useRemoveVenue } from "../../hooks";
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
  const { state } = useAppContext();
  const userName = state.userProfile?.name;
  const elementRef = useRef<HTMLDivElement>(null);
  const containerWidth = useElementWidth(elementRef);
  const [deletingVenue, setDeletingVenue] = useState<string[]>([]);
  const removeVenue = useRemoveVenue();

  const navigate = useNavigate();

  const handleRemoveVenue = async (venueId: string) => {
    setDeletingVenue((prev) => [...prev, venueId]);

    try {
      await removeVenue(venueId);
      navigate("/holidaze/venue-manager/my-venues-page");
    } catch (error) {
      console.error("Error removing venue: ", error);
    } finally {
      setDeletingVenue((prev) => prev.filter((id) => id !== venueId));
    }
  };

  const venueManagerPath = window.location.pathname.includes(`/holidaze/venue-manager/my-venues-page`);
  const removeIcon = (
    <span onClick={() => handleRemoveVenue(venue.id)}>
      <i className='bi bi-trash3-fill'></i>
    </span>
  );

  const handleClick = () => {
    let path;

    if (window.location.pathname.includes(`/holidaze/venue-manager/my-venues-page`)) {
      path = `/holidaze/venue-manager/update-venue-by-id/${venue.id}`;
    } else if (userName) {
      path = `/holidaze/user/venue-by-id/${venue.id}`;
    } else {
      path = `/holidaze/venue-by-id/${venue.id}`;
    }

    navigate(path);
  };

  return (
    <Card className='w-100 rounded-4 position-relative' onClick={handleClick}>
      <Card.Img
        className='card-by-offers-type object-fit-cover rounded-4 swiper-lazy p-1'
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
        <Card.Body className='d-flex flex-column justify-content-between p-1'>
          <div className='text-wrapper mb-0'>
            <h2 className='card-title h6 fs-sm-6 fw-semibold d-flex justify-content-between mb-0' ref={elementRef}>
              {containerWidth < 315 ? getTrimVenueName(venue) : getFullVenueName(venue)}
              <span>
                <i className='bi bi-star-fill text-warning fs-5 me-1'></i>
                {venue.rating}
              </span>
            </h2>
            <div>
              <div className='slider-item-details mt-0'>
                <div className='slider-item-location-details'>
                  <p className='fs-sm-6 mb-1'>
                    {getTrimCountryName(venue)}, {getTrimCityName(venue)},
                  </p>
                  <div className='fs-sm-6 d-flex justify-content-between'>
                    <p>
                      <span className='me-2 fw-semibold'>{getPricePerNight(venue)}</span>euro/ night
                    </p>
                    {venueManagerPath && removeIcon}
                  </div>
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
