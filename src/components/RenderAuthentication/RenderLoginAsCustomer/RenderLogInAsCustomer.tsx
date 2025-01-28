import { useState } from "react";
import { useAppContext } from "../../../context/app/useAppContext";
import { useLoginUser, useNavigateToElement, useCreateApiKey } from "../../../hooks";
import { Form } from "react-bootstrap";
import { GoBackButton, HeadingH1, CustomInput, LogInButton } from "../../";

const RenderLoginAsCustomer = () => {
  const { state } = useAppContext();
  const name = state.userData?.name;
  const locationPath = `/holidaze/user/logged-user-by-name/${name}`;
  const handleNavigate = useNavigateToElement({ locationPath });
  const { loginUser } = useLoginUser();
  const { createApiKey } = useCreateApiKey();

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
    await loginUser(formData);
    console.log("Form Data:", formData);
    handleNavigate();
    createApiKey();
  };

  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Login as a Customer</HeadingH1>
      <Form className='content-page-wrapper' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <CustomInput type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <CustomInput type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
        </Form.Group>
        <LogInButton type='submit' />
      </Form>
    </div>
  );
};

export default RenderLoginAsCustomer;
