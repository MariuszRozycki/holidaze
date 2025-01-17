import { Container, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import { HeadingH1, SignUpButton } from "../../components";
import { useNavigateToElement } from "../../hooks";

const RegisterNewVenue = () => {
  const locationPath = "#";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <Container>
      <HeadingH1>Register New Venue</HeadingH1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <FloatingLabel controlId='floatingInputName' label='Name' className='mb-3'>
            <Form.Control type='text' placeholder='Enter venue name' name='Enter venue name' />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicTextAres'>
          <FloatingLabel controlId='floatingTextarea' label='Venue description'>
            <Form.Control as='textarea' placeholder='Venue description' style={{ height: "100px" }} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formLocation'>
          <FloatingLabel controlId='floatingLocation' label='Location'>
            <Form.Control type='text' placeholder='Enter location' />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPricePerNight'>
          <InputGroup>
            <InputGroup.Text>
              <i className='bi bi-currency-euro'></i>
            </InputGroup.Text>
            <FloatingLabel controlId='floatingPricePerNight' label='Price per night'>
              <Form.Control type='number' placeholder='Enter price per night' min='0' step='0.01' name='pricePerNight' />
            </FloatingLabel>
          </InputGroup>
        </Form.Group>

        <SignUpButton btnText='Register venue' variant='primary' type='submit' onClick={handleNavigate} />
      </Form>
    </Container>
  );
};

export default RegisterNewVenue;
