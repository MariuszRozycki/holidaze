import { Container, Card, Button } from "react-bootstrap";
import { HeadingH1 } from "../../Headings";
import { useFetchProfile } from "../../../hooks";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../context/app/useAppContext";
import "./RenderLoggedUserProfile.scss";

const RenderLoggedUserProfile = () => {
  const { state } = useAppContext();
  const { isLoading, error, userProfile } = state;

  if (isLoading) {
    return <Container>Loading profile...</Container>;
  }

  if (error) {
    return <Container>Error: {error}</Container>;
  }

  if (!userProfile) {
    return <Container>No profile found</Container>;
  }

  return (
    <Container>
      <HeadingH1>Render logged User Profile</HeadingH1>
      <Card>
        <Card.Img className='user-banner' src={userProfile.banner.url} />
        <Card.Img className='user-avatar' src={userProfile.avatar.url} />
        <Card.Body>
          <h2 className='h4 fw-semibold'>{userProfile.name}</h2>
          <Card.Text className='fs-4 mb-1'>{userProfile.email}</Card.Text>
          {/* <Card.Text className='fs-4'>{userProfile.bio || "No bio available"}</Card.Text> */}
          <Button variant='primary'>Update profile</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RenderLoggedUserProfile;
