import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const SignUp = () => {
  return (
    <Container>
      <h1>Sign up as...</h1>
      <Link to='/holidaze/sign-up-as-customer'>...as a customer</Link> <br />
      <Link to='/holidaze/sign-up-as-manager'>...as a venue manager</Link>
    </Container>
  );
};

export default SignUp;
