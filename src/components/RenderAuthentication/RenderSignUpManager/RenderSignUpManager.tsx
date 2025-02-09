import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigateToElement, useRegisterUser } from "../../../hooks";
import { SignUpButton, CustomInput, GoBackButton, HeadingH1 } from "../../index";
import "./RenderSignUpManager.scss";

const RenderSignUpManager = () => {
  const locationPath = "/holidaze/sign-up-manager-reg-conf";
  const handleNavigate = useNavigateToElement({ locationPath });
  const { registerUser: registerUserAsVenueManager, isSuccess } = useRegisterUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    venueManager: true,
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

    if (!/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/.test(formData.email)) {
      errors.email = "The email value must be a valid stud.noroff.no email address.";
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
      await registerUserAsVenueManager(formData);

      if (isSuccess) {
        handleNavigate();
      } else {
        setGeneralError("An unexpected error occurred. Please try again.");
      }
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred. ";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setGeneralError(errorMessage);
    }
  };

  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Sign Up As a Manager</HeadingH1>

      {generalError && <p className='text-start text-danger mb-3 bg-light bg-opacity-50 px-3 py-1 rounded mt-2'>{generalError}</p>}

      <Form className='content-page-wrapper' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <CustomInput type='text' name='name' placeholder='Enter manager name' value={formData.name} onChange={handleChange} />
          {fieldErrors.name && (
            <p className='text-start text-danger mb-3 bg-light bg-opacity-50 px-3 py-1 rounded mt-2'>{fieldErrors.name}</p>
          )}
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <CustomInput type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleChange} />
          {fieldErrors.email && (
            <p className='text-start text-danger mb-3 bg-light bg-opacity-50 px-3 py-1 rounded mt-2'>{fieldErrors.email}</p>
          )}
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <CustomInput type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
          {fieldErrors.password && (
            <p className='text-start text-danger mb-3 bg-light bg-opacity-50 px-3 py-1 rounded mt-2'>{fieldErrors.password}</p>
          )}
        </Form.Group>

        <SignUpButton className='mt-5' type='submit' />
      </Form>
    </div>
  );
};

export default RenderSignUpManager;
