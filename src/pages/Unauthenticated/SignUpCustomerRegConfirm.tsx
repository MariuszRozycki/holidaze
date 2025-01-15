import { Container } from "react-bootstrap";
import { GoBackButton, LogInButton } from "../../components";
import { useNavigateToElement } from "../../hooks";

const SignUpCustomerRegConfirm = () => {
  const locationPath = "/holidaze/login-as-user";
  const handleNavigateTo = useNavigateToElement({ locationPath });

  return (
    <Container>
      <GoBackButton />
      <h1>Great!</h1>
      <p>You are register as a new customer!</p>
      <LogInButton btnText='Log in!' onClick={handleNavigateTo} />
    </Container>
  );
};

export default SignUpCustomerRegConfirm;
