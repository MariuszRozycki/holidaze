import { useNavigateToElement } from "../../hooks";
import { Container } from "react-bootstrap";
import { GoBackButton, SignUpButton } from "../../components";

const SignUpAsManager = () => {
  const locationPath = "/holidaze/sign-up-manager-reg-conf";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <Container>
      <GoBackButton />
      <h1>Sign As a Manager</h1>
      <SignUpButton btnText='Sign up!' onClick={handleNavigate} />
    </Container>
  );
};

export default SignUpAsManager;
