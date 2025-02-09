import { Container, Row, Col } from "react-bootstrap";
import { HeadingH1, CustomCard, Pagination, SortOptions, SearchBar, GoToMainPageButton } from "../..";
import { useFetchManagerVenues } from "../../../hooks";
import { useAppContext } from "../../../context/app/useAppContext";

interface RenderManagerVenueListProps {
  title: string;
  searchQuery?: string;
  showGoMainPage?: boolean;
}

const RenderManagerVenueList = ({ title, searchQuery = "", showGoMainPage = false }: RenderManagerVenueListProps) => {
  const { state, dispatch } = useAppContext();

  const { currentPage, isLoading, error, venues, sort, sortOrder, isSearching, userProfile } = state;

  const managerName = userProfile?.name;

  useFetchManagerVenues(currentPage, searchQuery, 10, sort, sortOrder, dispatch, undefined, managerName);

  if (isLoading || isSearching) {
    return (
      <Container>
        <HeadingH1>{title}</HeadingH1>
        <p>Loading...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <HeadingH1>{title}</HeadingH1>
        <p>Error: {error}</p>
      </Container>
    );
  }

  if (!venues.length) {
    return (
      <Container>
        <HeadingH1>{title}</HeadingH1>
        <p>No venues available</p>
      </Container>
    );
  }

  const handleClick = (venueId: string) => {
    console.log(venueId);
  };

  return (
    <Container>
      <HeadingH1>{title}</HeadingH1>
      {showGoMainPage && <GoToMainPageButton />}
      <SearchBar />
      {!searchQuery && <SortOptions />}
      <Row className='g-4'>
        {venues.map((venue) => (
          <Col key={venue.id} col={12} sm={6} md={6} lg={4} xl={3} onClick={() => handleClick(venue.id)}>
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

export default RenderManagerVenueList;
