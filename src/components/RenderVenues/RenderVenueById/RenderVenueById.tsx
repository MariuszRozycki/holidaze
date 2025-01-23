import { useParams } from "react-router-dom";
import { HeadingH1, GoBackButton, DatePickerButton, CustomSwiper, StarRating } from "../../";
import { useFetchData } from "../../../hooks";
import { getFullVenueName, getFullCityName, getFullCountryName, getMaxGuests, getVenueOwnerName } from "../../../utils";
import { useAppContext } from "../../../context/app/useAppContext";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./RenderVenueById.scss";

const VenueDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useAppContext();
  const { isLoading, error, selectedVenue } = state;

  useFetchData(undefined, undefined, 10, "", "", dispatch, id);

  if (isLoading) {
    return (
      <Container>
        <HeadingH1>Loading...</HeadingH1>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <HeadingH1>Error: {error}</HeadingH1>
      </Container>
    );
  }

  if (!selectedVenue) {
    return (
      <Container>
        <HeadingH1>No venue found</HeadingH1>
      </Container>
    );
  }

  const iconClass: Record<keyof typeof selectedVenue.meta, string> = {
    wifi: "bi bi-wifi",
    parking: "bi bi-p-circle",
    breakfast: "bi bi-egg-fried",
    pets: "bi bi-tencent-qq",
  };

  return (
    <>
      <Row>
        <Col>
          <CustomSwiper isLoading={isLoading} isError={error} selectedVenue={selectedVenue} />
        </Col>
      </Row>
      <Row>
        <Col col={12}>
          <Card className='border-0 px-0'>
            <Card.Body className='px-0'>
              <h1 className='h3 mb-2 fw-semibold'>{getFullVenueName(selectedVenue)}</h1>
              <h2 className='h3 mb-2'>
                <i className='bi bi-geo me-2'></i>
                {getFullCountryName(selectedVenue)}, {getFullCityName(selectedVenue)}
              </h2>
              <h3 className='h3'>{getVenueOwnerName(selectedVenue.owner.name)}</h3>
              <h3 className='h3'>
                <StarRating rating={selectedVenue.rating} />
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col col={12} md={7}>
          <Card className='border-0 px-0'>
            <Card.Body className='px-0'>
              <h3 className='h3 fw-semibold'>Description:</h3>
              <p className='fs-4 single-venue-description'>{selectedVenue.description}</p>
              <h3 className='h3'>Services:</h3>
              <ul className='list-unstyled fs-4'>
                {Object.entries(selectedVenue.meta).map(([key, value]) => {
                  const typedKey = key as keyof typeof iconClass;

                  return (
                    <li key={key} className={`d-flex align-items-center ${value ? "yes" : "no"}`}>
                      <i className={`${iconClass[typedKey]} me-2`}></i>
                      {key.charAt(0).toUpperCase() + key.slice(1)}: {value ? "Yes" : "No"}
                    </li>
                  );
                })}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col col={12} md={5} className='md-text-end'>
          <Card className='border-0 px-0'>
            <Card.Body className='px-0'>
              <h3 className='h3 fw-semibold'>Availability:</h3>
              <h2 className='fs-3'>
                <span className='me-2'>euro {selectedVenue.price}/</span>night
              </h2>
              <p className='h3'>
                <i className='bi bi-people-fill me-2'></i>
                <span>max: {getMaxGuests(selectedVenue)} guests</span>
              </p>
              <DatePickerButton />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default VenueDetails;
