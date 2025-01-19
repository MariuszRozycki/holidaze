import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { HeadingH1, GoBackButton } from "../../components";
import { useFetchData } from "../../hooks";
import { handleImageError, getTrimCityName, getTrimCountryName } from "../../utils";
import { useAppContext } from "../../context/app/useAppContext";

const RenderVenueById = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useAppContext();
  const { isLoading, error, selectedVenue } = state;

  useFetchData(undefined, undefined, 10, "", "", dispatch, id);

  console.log(selectedVenue);

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
      <GoBackButton />

      <Row className='g-lg-5'>
        <Col lg={4} className='mb-3'>
          <Image
            className='w-100 h-sm-100 rounded-4 shadow-4 object-fit-cover'
            src={selectedVenue.media[0].url}
            alt={selectedVenue.name}
            onError={handleImageError}
            rounded
          />
        </Col>
        <Col lg={8}>
          <Card className='single-offer border-0'>
            <Card.Body className='p-0'>
              <h1 className='h2 mt-3 mb-md-4'>{selectedVenue.name}</h1>
              <p>{getTrimCountryName(selectedVenue)}</p>
              <p>{getTrimCityName(selectedVenue)}</p>
              <p>{selectedVenue.description}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RenderVenueById;
