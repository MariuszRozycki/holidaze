import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/app/useAppContext";
import { useLoginUser, useCreateApiKey } from "../../../hooks";
import { GoBackButton, HeadingH1, CustomInput, LogInButton, ErrorMessageAuth } from "../../index";

const RenderLogInAsManager = () => {
  const { loginUser: loginUserAsVenueManager, isSuccess } = useLoginUser();
  const { state } = useAppContext();
  const { createApiKey } = useCreateApiKey();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
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
      await loginUserAsVenueManager(formData);
      await createApiKey();
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred.";
      if (error && typeof error === "object") {
        const errObj = error as { errors?: Array<{ message: string }>; statusCode?: number };
        if (errObj.statusCode === 401 && errObj.errors && errObj.errors.length > 0) {
          errorMessage = errObj.errors[0].message;
        } else if (errObj.errors && errObj.errors.length > 0) {
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
      const userName = state.userData?.name ?? "";
      if (userName) {
        navigate(`/holidaze/venue-manager/venue-manager-admin-panel`);
      }
    }
  }, [isSuccess, state.userData, navigate]);

  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Login as a Venue Manager</HeadingH1>

      {generalError && <ErrorMessageAuth message={generalError} />}

      <Form className='content-page-wrapper' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <CustomInput type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleChange} />
          {fieldErrors.email && <ErrorMessageAuth message={fieldErrors.email} />}
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <CustomInput type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
          {fieldErrors.password && <ErrorMessageAuth message={fieldErrors.password} />}
        </Form.Group>
        <LogInButton type='submit' />
      </Form>
    </div>
  );
};

export default RenderLogInAsManager;
