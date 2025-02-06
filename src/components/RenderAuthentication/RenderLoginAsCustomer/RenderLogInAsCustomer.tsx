import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/app/useAppContext";
import { useLoginUser, useCreateApiKey } from "../../../hooks";
import { Form } from "react-bootstrap";
import { GoBackButton, HeadingH1, CustomInput, LogInButton } from "../../";

const RenderLoginAsCustomer = () => {
  const { loginUser, isLoading, error, isSuccess } = useLoginUser();
  const { state } = useAppContext();
  const { createApiKey } = useCreateApiKey();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginUser(formData);
    if (isLoading) return <p>Loading data...</p>;

    if (error) {
      console.error("Login failed");
      return <>{error && <p>Login failed: {error}</p>}</>;
    }
    await createApiKey();
  };

  useEffect(() => {
    if (isSuccess) {
      const userName = state.userData?.name ?? "";
      if (userName) {
        navigate(`/holidaze/user/logged-user-home-page`);
      }
    }
  }, [isSuccess, state.userData, navigate]);

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
