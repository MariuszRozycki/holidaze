import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigateToElement, useRegisterUser } from "../../../hooks";
import { CustomInput, SignUpButton, GoBackButton, HeadingH1, ErrorMessageAuth } from "../../index";
import "./RenderSignUpCustomer.scss";

const RenderSignUpCustomer = () => {
  const locationPath = "/holidaze/sign-up-customer-reg-conf-page";
  const handleNavigate = useNavigateToElement({ locationPath });
  const { registerUser, isSuccess } = useRegisterUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!/^[a-zA-Z0-9_]+$/.test(formData.name)) {
      errors.name = "The name value must not contain punctuation symbols apart from underscore (_).";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "The email value must be a valid email address.";
    }

    if (formData.password.length < 8) {
      errors.password = "The password value must be at least 8 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralError(null);

    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    try {
      await registerUser(formData);

      if (isSuccess) {
        handleNavigate();
      } else {
        setGeneralError("An unexpected error occurred. Please try again.");
      }
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred.";

      if (error && typeof error === "object" && "errors" in error) {
        const errObj = error as { errors: Array<{ message: string }> };
        if (errObj.errors.length > 0) {
          errorMessage = errObj.errors[0].message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      setGeneralError(errorMessage);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleNavigate();
    }
  }, [isSuccess, handleNavigate]);

  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Sign Up As a Customer</HeadingH1>

      {generalError && <ErrorMessageAuth message={generalError} />}

      <Form className='content-page-wrapper' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <CustomInput type='text' name='name' placeholder='Enter name' value={formData.name} onChange={handleChange} />
          {fieldErrors.name && <ErrorMessageAuth message={fieldErrors.name} />}
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <CustomInput type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleChange} />
          {fieldErrors.email && <ErrorMessageAuth message={fieldErrors.email} />}
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <CustomInput type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
          {fieldErrors.password && <ErrorMessageAuth message={fieldErrors.password} />}
        </Form.Group>

        <SignUpButton className='mt-5' type='submit' />
      </Form>
    </div>
  );
};

export default RenderSignUpCustomer;
