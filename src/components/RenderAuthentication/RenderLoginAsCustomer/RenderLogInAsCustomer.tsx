import { useNavigateToElement } from "../../../hooks";
import { Form } from "react-bootstrap";
import { GoBackButton, HeadingH1, CustomInput, LogInButton } from "../../";

const RenderLoginAsCustomer = () => {
  const locationPath = "/holidaze/user/logged-user-home-page";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Login as a Customer</HeadingH1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <CustomInput type='text' placeholder='Enter name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <CustomInput type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <CustomInput type='password' placeholder='Password' />
        </Form.Group>
        <LogInButton type='submit' onClick={handleNavigate} />
      </Form>
    </div>
  );
};

export default RenderLoginAsCustomer;
