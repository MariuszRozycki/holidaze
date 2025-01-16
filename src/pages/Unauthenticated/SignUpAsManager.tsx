import { useNavigateToElement } from "../../hooks";
import { Container } from "react-bootstrap";
import { HeadingH1, GoBackButton, SignUpButton } from "../../components";

const SignUpAsManager = () => {
  const locationPath = "/holidaze/sign-up-manager-reg-conf";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <Container>
      <GoBackButton />
      <HeadingH1>Sign As a Manager</HeadingH1>
      <SignUpButton btnText='Sign up!' onClick={handleNavigate} />
    </Container>
  );
};

export default SignUpAsManager;
