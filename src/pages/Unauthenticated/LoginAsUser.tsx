import { Container, Form } from "react-bootstrap";
import { LogInButton } from "../../components";
import { useNavigateToElement } from "../../hooks";

const LoginAsUser = () => {
  const locationPath = "/holidaze/user/logged-user-home-page";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <Container>
      <h1>Login as a User</h1>

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

export default LoginAsUser;
