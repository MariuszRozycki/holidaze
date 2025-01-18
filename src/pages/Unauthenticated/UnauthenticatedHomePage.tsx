import { Container, Row, Col } from "react-bootstrap";
import { HeadingH1, CustomCard, Pagination, SortOptions, SearchBar } from "../../components";
import { useAppContext } from "../../context/app/useAppContext";
import { useFetchData } from "../../hooks";

const Unauthenticated = () => {
  const { state, dispatch } = useAppContext();
  const { currentPage, isLoading, error, venues, sort, sortOrder, isSearching, searchQuery } = state;

  // Używamy jednego hooka do obsługi wyszukiwania i pobierania danych
  useFetchData(currentPage, searchQuery, 10, sort, sortOrder, dispatch);

  if (isLoading || isSearching) {
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

  if (!venues.length) {
    return (
      <Container>
        <HeadingH1>No venues available</HeadingH1>
      </Container>
    );
  }

  return (
    <Container>
      <HeadingH1>All venues</HeadingH1>
      <SearchBar />
      <SortOptions />
      <Row className='g-3'>
        {venues.map((venue) => (
          <Col key={venue.id} sm={6} md={4} lg={3}>
            <CustomCard venue={venue} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default Unauthenticated;
