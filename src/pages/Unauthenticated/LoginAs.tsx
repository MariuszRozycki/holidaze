import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HeadingH1 } from "../../components";

const LoginAs = () => {
  return (
    <Container>
      <HeadingH1>Login as...</HeadingH1>
      <Link to='/holidaze/login-as-user'>...as a customer</Link> <br />
      <Link to='/holidaze/login-as-manager'>...as a venue manager</Link>
    </Container>
  );
};

export default LoginAs;
