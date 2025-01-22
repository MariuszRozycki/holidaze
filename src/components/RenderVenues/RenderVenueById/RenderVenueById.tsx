import { useParams } from "react-router-dom";
import { HeadingH1, GoBackButton, DatePickerButton, CustomSwiper, StarRating } from "../../";
import { useFetchData } from "../../../hooks";
import { getTrimVenueName, getTrimCityName, getTrimCountryName } from "../../../utils";
import { useAppContext } from "../../../context/app/useAppContext";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import "./RenderVenueById.scss";

const VenueDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useAppContext();
  const { isLoading, error, selectedVenue } = state;
  useFetchData(undefined, undefined, 10, "", "", dispatch, id);

  console.log("Hello from VenueDatails", selectedVenue);

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
              <h1 className='h4 mb-2'>{getTrimVenueName(selectedVenue)}</h1>
              <h2 className='h3 mb-2'>
                <i className='bi bi-geo me-2'></i>
                {getTrimCountryName(selectedVenue)}, {getTrimCityName(selectedVenue)}
              </h2>
              <h3 className='h3'>
                <StarRating rating={selectedVenue.rating} />
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
          <Card className='border-0 px-0'>
            <Card.Body className='px-0'>
              <h3 className='h3'>Description:</h3>
              <p className='fs-4'>{selectedVenue.description}</p>
              <h3 className='h3'>Services:</h3>
              <ul className='list-unstyled'>
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
        <Col md={5} className='text-end'>
          <Card className='border-0 px-0'>
            <Card.Body className='px-0'>
              <h2 className='h4'>
                <i className='bi bi-currency-euro me-1'></i>
                {selectedVenue.price}/ night
              </h2>
              <p className='h3'>
                <i className='bi bi-people-fill me-2'></i>
                <span>max: {selectedVenue.maxGuests} guests</span>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default VenueDetails;
