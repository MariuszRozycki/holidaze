import { Container, Row, Col } from "react-bootstrap";
import { HeadingH1, CustomCard } from "../../components";
import { useFetchData } from "../../hooks";

const Unauthenticated = () => {
  const { data, meta, error, loading } = useFetchData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <Container>
        <HeadingH1>Error: {error}</HeadingH1>
      </Container>
    );
  }

  if (!data.length) {
    return <p>No venues available</p>;
  }

  return (
    <Container>
      <HeadingH1>Unauthenticated Home Page</HeadingH1>
      <Row className='g-3'>
        {data.map((venue) => (
          <Col key={venue.id} sm={6} md={4} lg={3}>
            <CustomCard venue={venue} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Unauthenticated;
