import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigateToElement, useRegisterUser } from "../../../hooks";
import { SignUpButton, CustomInput, GoBackButton, HeadingH1 } from "../../index";
import "./RenderSignUpManager.scss";

const RenderSignUpManager = () => {
  const locationPath = "/holidaze/sign-up-manager-reg-conf";
  const handleNavigate = useNavigateToElement({ locationPath });
  const { registerUser: registerUserAsVenueManager } = useRegisterUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    venueManager: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registerUserAsVenueManager(formData);

    handleNavigate();
  };

  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Sign Up As a Manager</HeadingH1>
      <Form className='content-page-wrapper' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <CustomInput type='text' name='name' placeholder='Enter manager name' value={formData.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <CustomInput type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <CustomInput type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
        </Form.Group>
        <SignUpButton className='mt-5' type='submit' />
      </Form>
    </div>
  );
};

export default RenderSignUpManager;
