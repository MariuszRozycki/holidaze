import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HeadingH1 } from "../../components";

const SignUp = () => {
  return (
    <Container>
      <HeadingH1>Sign up as...</HeadingH1>
      <Link to='/holidaze/sign-up-as-customer'>...as a customer</Link> <br />
      <Link to='/holidaze/sign-up-as-manager'>...as a venue manager</Link>
    </Container>
  );
};

export default SignUp;
