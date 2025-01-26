import { Form } from "react-bootstrap";
import { useNavigateToElement } from "../../../hooks";
import { SignUpButton, CustomInput, GoBackButton, HeadingH1 } from "../../index";
import "./RenderSignUpManager.scss";

const RenderSignUpManager = () => {
  const locationPath = "/holidaze/sign-up-manager-reg-conf";
  const handleNavigate = useNavigateToElement({ locationPath });
  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Sign Up As a Manager</HeadingH1>
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
        <SignUpButton type='submit' onClick={handleNavigate} />
      </Form>
    </div>
  );
};

export default RenderSignUpManager;
