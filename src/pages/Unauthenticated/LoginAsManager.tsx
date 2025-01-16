import { Container, Form } from "react-bootstrap";
import { useNavigateToElement } from "../../hooks";
import { HeadingH1, LogInButton } from "../../components";

const LoginAsManager = () => {
  const locationPath = "/holidaze/user/logged-manager-home-page";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <Container>
      <HeadingH1>Login as a Venue Manager.</HeadingH1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <LogInButton btnText='Log in!' variant='primary' type='submit' onClick={handleNavigate} />
      </Form>
    </Container>
  );
};

export default LoginAsManager;
