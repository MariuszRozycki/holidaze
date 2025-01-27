import { useNavigateToElement } from "../../../hooks";
import { Form } from "react-bootstrap";
import { GoBackButton, HeadingH1, CustomInput, LogInButton } from "../../";

const RenderLogInAsManager = () => {
  const locationPath = "/holidaze/venue-manager/venue-manager-home-page";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Login as a Venue Manager.</HeadingH1>
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

export default RenderLogInAsManager;
