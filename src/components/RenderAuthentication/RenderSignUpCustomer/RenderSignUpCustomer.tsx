import { useNavigateToElement } from "../../../hooks";
import { Form } from "react-bootstrap";
import { CustomInput, SignUpButton, GoBackButton, HeadingH1 } from "../../index";
import "./RenderSignUpCustomer.scss";

const RenderSignUpCustomer = () => {
  const locationPath = "/holidaze/sign-up-customer-reg-conf";
  const handleNavigate = useNavigateToElement({ locationPath });
  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Sign As a Customer</HeadingH1>
      <Form className='content-page-wrapper'>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <CustomInput type='text' placeholder='Enter name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <CustomInput type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <CustomInput type='password' placeholder='Password' />
        </Form.Group>
        <SignUpButton className='mt-5' type='submit' onClick={handleNavigate} />
      </Form>
    </div>
  );
};

export default RenderSignUpCustomer;
