import { useNavigateToElement } from "../../../hooks";
import { Form } from "react-bootstrap";
import { CustomInput, SignUpButton } from "../../index";
import "./RenderSignUpCustomer.scss";

const RenderSignUpCustomer = () => {
  const locationPath = "/holidaze/sign-up-customer-reg-conf";
  const handleNavigate = useNavigateToElement({ locationPath });
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicName'>
        <CustomInput className='custom-input' type='text' placeholder='Enter name' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <CustomInput className='custom-input' type='email' placeholder='Enter email' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <CustomInput className='custom-input' type='password' placeholder='Password' />
      </Form.Group>
      <SignUpButton btnText='Sign up!' className='sign-up-button mt-5' type='submit' onClick={handleNavigate} />
    </Form>
  );
};

export default RenderSignUpCustomer;
