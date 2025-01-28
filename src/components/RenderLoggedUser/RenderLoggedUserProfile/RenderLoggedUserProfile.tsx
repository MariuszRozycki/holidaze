import { Container } from "react-bootstrap";
import { HeadingH1 } from "../../Headings";
import { useFetchProfile } from "../../../hooks";
import { useParams } from "react-router-dom";

const RenderLoggedUserProfile = () => {
  const { name } = useParams<{ name: string }>(); // Pobranie dynamicznego parametru
  console.log("Name from useParams: ", name);

  const { profile, isLoading, error } = useFetchProfile(name || ""); // Przekazanie dynamicznego parametru

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <HeadingH1>Render logged User Profile</HeadingH1>
      <div>
        <h1>{profile?.name}</h1>
        <p>Email: {profile?.email}</p>
        <p>Bio: {profile?.bio || "No bio available"}</p>
      </div>
    </Container>
  );
};

export default RenderLoggedUserProfile;
