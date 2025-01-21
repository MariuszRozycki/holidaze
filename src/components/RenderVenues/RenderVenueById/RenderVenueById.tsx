import { useParams } from "react-router-dom";
import { HeadingH1, GoBackButton, DatePickerButton, CustomSwiper } from "../../";
import { useFetchData } from "../../../hooks";
import { handleImageError, getTrimCityName, getTrimCountryName } from "../../../utils";
import { useAppContext } from "../../../context/app/useAppContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
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

  return (
    <Container>
      <Row>
        <Col>
          <CustomSwiper isLoading={isLoading} isError={error} selectedVenue={selectedVenue} />
          <Image src={selectedVenue.media[0].url} alt={selectedVenue.name} className='w-100 rounded-4 shadow-4' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className='border-0'>
            <Card.Body>
              <h1 className='h2'>{selectedVenue.name}</h1>
              <p className='text-muted'>{selectedVenue.location.country}</p>
              <p className='text-muted'>{selectedVenue.location.city}</p>
              <p>{selectedVenue.description}</p>
              <h4>Rating: {selectedVenue.rating}</h4>
            </Card.Body>
          </Card>
          <DatePickerButton />
          <Form>
            <Form.Group>
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control type='number' placeholder='Enter number of guests' />
            </Form.Group>
            <Button variant='primary' className='mt-3'>
              Book Now
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default VenueDetails;
