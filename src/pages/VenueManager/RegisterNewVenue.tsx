import { useState } from "react";
import { CreateNewVenueRequest } from "../../types/api";
import { Container, Form, FloatingLabel, InputGroup, Alert, Button } from "react-bootstrap";
import { HeadingH1, CustomButton, ReactToggleButtons, LocationFormSection, MediaFormSection, CustomInput } from "../../components";
import { useNavigateToElement, useReactToggleButtons, useCreateNewVenue } from "../../hooks";
import "./RegisterNewVenue.scss";

const RegisterNewVenue = () => {
  const locationPath = "/holidaze/venue-manager/new-venue-registered";
  const handleNavigate = useNavigateToElement({ locationPath });
  const { createNewVenue } = useCreateNewVenue();
  const { formValues, handleToggleChange } = useReactToggleButtons();

  const [formData, setFormData] = useState<CreateNewVenueRequest>({
    name: "",
    description: "",
    media: [],
    price: 0,
    maxGuests: 0,
    meta: { wifi: false, parking: false, breakfast: false, pets: false },
    location: { address: "", city: "", zip: "", country: "", continent: "", lat: 0, lng: 0 },
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "maxGuests" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const updatedFormData: CreateNewVenueRequest = {
        ...formData,
        media: formData.media.filter((m) => m.url.trim() !== ""),
      };

      await createNewVenue(updatedFormData);
      handleNavigate();
    } catch (error) {
      console.error(error);
      setError("Something went wrong while creating a new venue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <HeadingH1>Register New Venue</HeadingH1>
      {error && <Alert variant='danger'>{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <FloatingLabel label='Name'>
            {/* <CustomInput
              type='text'
              placeholder='Enter venue name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            /> */}
            <Form.Control
              type='text'
              placeholder='Enter venue name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicDescription'>
          <FloatingLabel label='Venue description'>
            <Form.Control
              as='textarea'
              placeholder='Enter venue description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              required
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Form.Group>

        <LocationFormSection formData={formData} setFormData={setFormData} />

        <Form.Group className='mb-3' controlId='formPricePerNight'>
          <InputGroup>
            <InputGroup.Text>
              <i className='bi bi-currency-euro'></i>
            </InputGroup.Text>
            <FloatingLabel label='Price per night'>
              <Form.Control
                type='number'
                placeholder='Enter price per night'
                name='price'
                value={formData.price === 0 ? "" : formData.price}
                onChange={(e) => {
                  const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
                  setFormData((prev) => ({ ...prev, price: value }));
                }}
                onFocus={() => {
                  if (formData.price === 0) {
                    setFormData((prev) => ({ ...prev, price: "" as unknown as number }));
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setFormData((prev) => ({ ...prev, price: 0 }));
                  }
                }}
                required
              />
            </FloatingLabel>
          </InputGroup>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formMaxGuests'>
          <FloatingLabel label='Maximum Guests'>
            <Form.Control
              type='number'
              placeholder='Enter maximum guests'
              name='maxGuests'
              value={formData.maxGuests === 0 ? "" : formData.maxGuests}
              onChange={(e) => {
                const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
                setFormData((prev) => ({ ...prev, maxGuests: value }));
              }}
              onFocus={() => {
                if (formData.maxGuests === 0) {
                  setFormData((prev) => ({ ...prev, maxGuests: "" as unknown as number }));
                }
              }}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setFormData((prev) => ({ ...prev, maxGuests: 0 }));
                }
              }}
              min='1'
              max='50'
              required
            />
          </FloatingLabel>
        </Form.Group>

        <MediaFormSection formData={formData} setFormData={setFormData} />

        <ReactToggleButtons formValues={formValues} handleToggleChange={handleToggleChange} />

        <CustomButton btnText='Register venue' variant='primary' type='submit' disabled={isSubmitting} />
      </Form>
    </Container>
  );
};

export default RegisterNewVenue;
