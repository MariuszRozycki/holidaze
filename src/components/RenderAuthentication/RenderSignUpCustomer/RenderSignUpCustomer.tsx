import { useState } from "react";
import { useRegisterUser, useNavigateToElement } from "../../../hooks";
import { Form } from "react-bootstrap";
import { CustomInput, SignUpButton, GoBackButton, HeadingH1 } from "../../index";
import "./RenderSignUpCustomer.scss";

const RenderSignUpCustomer = () => {
  const locationPath = "/holidaze/sign-up-customer-reg-conf-page";
  const handleNavigate = useNavigateToElement({ locationPath });
  const { registerUser } = useRegisterUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
    await registerUser(formData);
    console.log("Form Data:", formData);
    // handleNavigate();
  };

  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Sign As a Customer</HeadingH1>
      <Form className='content-page-wrapper' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <CustomInput type='text' name='name' placeholder='Enter name' value={formData.name} onChange={handleChange} />
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

export default RenderSignUpCustomer;
