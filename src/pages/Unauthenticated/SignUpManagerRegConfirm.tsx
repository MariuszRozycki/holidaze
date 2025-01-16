import { Container } from "react-bootstrap";
import { GoBackButton, LogInButton, HeadingH1 } from "../../components";
import { useNavigateToElement } from "../../hooks";

const SignUpManagerRegConfirm = () => {
  const locationPath = "/holidaze/login-as-manager";
  const handleUseNavigate = useNavigateToElement({ locationPath });

  return (
    <Container>
      <GoBackButton />
      <HeadingH1>Great!</HeadingH1>
      <p>You are register as a new manager!</p>
      <LogInButton btnText='Log in!' onClick={handleUseNavigate} />
    </Container>
  );
};

export default SignUpManagerRegConfirm;
