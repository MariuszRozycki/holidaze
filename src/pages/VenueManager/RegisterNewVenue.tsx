import { useState } from "react";
import { CreateNewVenueRequest } from "../../types/api";
import { newVenueFormValidation, hasErrors } from "../../utils/";
import { Container, Form, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  HeadingH1,
  CustomButton,
  ReactToggleButtons,
  LocationFormSection,
  MediaFormSection,
  VenueNameField,
  VenueDescriptionField,
  PricePerNightField,
  MaximumGuestsField,
} from "../../components";
import { useCreateNewVenue } from "../../hooks";
import "./RegisterNewVenue.scss";

const RegisterNewVenue = () => {
  const { createNewVenue } = useCreateNewVenue();

  const [formData, setFormData] = useState<CreateNewVenueRequest>({
    name: "",
    description: "",
    media: [{ url: "", alt: "" }],
    price: 0,
    maxGuests: 0,
    meta: { wifi: false, parking: false, breakfast: false, pets: false },
    location: { address: "", city: "", zip: "", country: "", continent: "", lat: 0, lng: 0 },
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    maxGuests: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const validationErrors = newVenueFormValidation(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const updatedFormData = {
        ...formData,
        media: formData.media.filter((m) => m.url.trim() !== ""),
      };

      await createNewVenue(updatedFormData);
      toast.success("New venue registered!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error(error);
      setError("Something went wrong while creating a new venue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <div className='page-element-wrapper'>
        <HeadingH1>Register New Venue</HeadingH1>
        {error && <Alert variant='danger'>{error}</Alert>}

        <Form className='content-page-wrapper register-new-venue' onSubmit={handleSubmit}>
          <VenueNameField formData={formData} setFormData={setFormData} errors={errors} />
          <VenueDescriptionField formData={formData} setFormData={setFormData} errors={errors} />
          <LocationFormSection formData={formData} setFormData={setFormData} />
          <PricePerNightField formData={formData} setFormData={setFormData} errors={errors} />
          <MaximumGuestsField formData={formData} setFormData={setFormData} errors={errors} />
          <MediaFormSection formData={formData} setFormData={setFormData} />
          <ReactToggleButtons meta={formData.meta} setMeta={(meta) => setFormData((prev) => ({ ...prev, meta }))} />
          <CustomButton btnText='Register venue' variant='primary' type='submit' disabled={isSubmitting} />
        </Form>
      </div>
    </Container>
  );
};

export default RegisterNewVenue;
