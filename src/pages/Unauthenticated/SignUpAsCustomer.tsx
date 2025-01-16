import { useNavigateToElement } from "../../hooks";
import { Container, Form } from "react-bootstrap";
import { GoBackButton, HeadingH1, SignUpButton } from "../../components";

const SignUpAsCustomer = () => {
  const locationPath = "/holidaze/sign-up-customer-reg-conf";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <Container>
      <GoBackButton />
      <HeadingH1>Sign As a Customer</HeadingH1>
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

export default SignUpAsCustomer;
