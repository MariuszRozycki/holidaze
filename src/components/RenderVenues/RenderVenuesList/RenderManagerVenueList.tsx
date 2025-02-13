import { Container, Row, Col } from "react-bootstrap";
import { HeadingH1, CustomCard } from "../..";
import { useFetchManagerVenues } from "../../../hooks";
import { useAppContext } from "../../../context/app/useAppContext";

interface RenderManagerVenueListProps {
  title: string;
  searchQuery?: string;
  showGoMainPage?: boolean;
}

const RenderManagerVenueList = ({ title, searchQuery = "" }: RenderManagerVenueListProps) => {
  const { state, dispatch } = useAppContext();

  const { currentPage, isLoading, error, venues, sort, sortOrder, isSearching, userProfile } = state;

  const managerName = userProfile?.name;
  const formattedManagerName = managerName ? managerName.charAt(0).toUpperCase() + managerName.slice(1) : "";

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
        <p>No venues available. Add venue.</p>
      </Container>
    );
  }

  return (
    <Container>
      <section className='manager-wrapper mb-2'>
        <p className='d-block fs-5'>
          Nice to see you <span className='fw-semibold'>{formattedManagerName}</span>
        </p>
      </section>
      <HeadingH1>{title}</HeadingH1>

      <p>You have: {venues.length} objects</p>

      <Row className='g-4'>
        {venues.map((venue) => (
          <Col key={venue.id} col={12} sm={6} md={6} lg={4} xl={3}>
            <CustomCard venue={venue} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RenderManagerVenueList;
