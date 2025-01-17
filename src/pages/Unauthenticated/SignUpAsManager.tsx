import { useNavigateToElement } from "../../hooks";
import { Container, Form } from "react-bootstrap";
import { HeadingH1, GoBackButton, SignUpButton } from "../../components";

const SignUpAsManager = () => {
  const locationPath = "/holidaze/sign-up-manager-reg-conf";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <Container>
      <GoBackButton />
      <HeadingH1>Sign As a Manager</HeadingH1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Control type='text' placeholder='Enter name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <SignUpButton btnText='Sign up!' variant='primary' type='submit' onClick={handleNavigate} />
      </Form>
    </Container>
  );
};

export default SignUpAsManager;
