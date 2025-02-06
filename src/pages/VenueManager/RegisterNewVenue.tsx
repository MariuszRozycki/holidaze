import { useState } from "react";
import { CreateNewVenueRequest } from "../../types/api";
import { newVenueFormValidation, hasErrors } from "../../utils/";
import { Container, Form, Alert } from "react-bootstrap";
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
import { useNavigateToElement, useReactToggleButtons, useCreateNewVenue } from "../../hooks";
import "./RegisterNewVenue.scss";

const RegisterNewVenue = () => {
  const locationPath = "/holidaze/venue-manager/new-venue-registered";
  const handleNavigate = useNavigateToElement({ locationPath });
  const { createNewVenue } = useCreateNewVenue();
  const { formValues, handleToggleChange } = useReactToggleButtons();

  // State for form data
  const [formData, setFormData] = useState<CreateNewVenueRequest>({
    name: "",
    description: "",
    media: [{ url: "", alt: "" }],
    price: 0,
    maxGuests: 0,
    meta: { wifi: false, parking: false, breakfast: false, pets: false },
    location: { address: "", city: "", zip: "", country: "", continent: "", lat: 0, lng: 0 },
  });

  // State for form errors
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    maxGuests: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate form
    const validationErrors = newVenueFormValidation(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      setIsSubmitting(false);
      return;
    }

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
      <div className='page-element-wrapper'>
        <HeadingH1>Register New Venue</HeadingH1>
        {error && <Alert variant='danger'>{error}</Alert>}

        <Form className='content-page-wrapper register-new-venue' onSubmit={handleSubmit}>
          <VenueNameField formData={formData} setFormData={setFormData} errors={errors} />
          <VenueDescriptionField formData={formData} setFormData={setFormData} errors={errors} />
          <LocationFormSection formData={formData} setFormData={setFormData} />
          <PricePerNightField formData={formData} setFormData={setFormData} errors={errors} />
          <MaximumGuestsField formData={formData} setFormData={setFormData} errors={errors} />

          {/* Media Section */}
          <MediaFormSection formData={formData} setFormData={setFormData} />

          {/* Meta Toggles */}
          <ReactToggleButtons formValues={formValues} handleToggleChange={handleToggleChange} />

          {/* Submit Button */}
          <CustomButton btnText='Register venue' variant='primary' type='submit' disabled={isSubmitting} />
        </Form>
      </div>
    </Container>
  );
};

export default RegisterNewVenue;

// import { useState } from "react";
// import { CreateNewVenueRequest } from "../../types/api";
// import { Container, Form, InputGroup, Alert, Button } from "react-bootstrap";
// import { HeadingH1, CustomButton, ReactToggleButtons, LocationFormSection, MediaFormSection, CustomInput } from "../../components";
// import { useNavigateToElement, useReactToggleButtons, useCreateNewVenue } from "../../hooks";
// import "./RegisterNewVenue.scss";

// const RegisterNewVenue = () => {
//   const locationPath = "/holidaze/venue-manager/new-venue-registered";
//   const handleNavigate = useNavigateToElement({ locationPath });
//   const { createNewVenue } = useCreateNewVenue();
//   const { formValues, handleToggleChange } = useReactToggleButtons();

//   // Stan formularza
//   const [formData, setFormData] = useState<CreateNewVenueRequest>({
//     name: "",
//     description: "",
//     media: [{ url: "", alt: "" }],
//     price: 0,
//     maxGuests: 0,
//     meta: { wifi: false, parking: false, breakfast: false, pets: false },
//     location: { address: "", city: "", zip: "", country: "", continent: "", lat: 0, lng: 0 },
//   });

//   // Stan błędów
//   const [errors, setErrors] = useState({
//     name: "",
//     description: "",
//     price: "",
//     maxGuests: "",
//   });

//   const [error, setError] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Obsługa zmiany wartości formularza
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "price" || name === "maxGuests" ? parseFloat(value) || 0 : value,
//     }));
//   };

//   // Walidacja formularza
//   const validateForm = () => {
//     const newErrors: typeof errors = {
//       name: "",
//       description: "",
//       price: "",
//       maxGuests: "",
//     };

//     if (!formData.name.trim()) newErrors.name = "Name is required!";
//     if (!formData.description.trim()) newErrors.description = "Description is required!";
//     if (formData.price <= 0) newErrors.price = "Price must be greater than 0!";
//     if (formData.maxGuests <= 0) newErrors.maxGuests = "Maximum guests must be greater than 0!";

//     setErrors(newErrors);

//     // Zwracamy `true`, jeśli nie ma błędów
//     return Object.values(newErrors).every((error) => error === "");
//   };

//   // Obsługa wysyłania formularza
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     // Sprawdzenie walidacji
//     if (!validateForm()) {
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const updatedFormData: CreateNewVenueRequest = {
//         ...formData,
//         media: formData.media.filter((m) => m.url.trim() !== ""),
//       };

//       await createNewVenue(updatedFormData);
//       handleNavigate();
//     } catch (error) {
//       console.error(error);
//       setError("Something went wrong while creating a new venue.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Container>
//       <div className='page-element-wrapper'>
//         <HeadingH1>Register New Venue</HeadingH1>
//         {error && <Alert variant='danger'>{error}</Alert>}

//         <Form className='content-page-wrapper register-new-venue' onSubmit={handleSubmit}>
//           {/* Nazwa obiektu */}
//           <Form.Group className='mb-3' controlId='formBasicName'>
//             <CustomInput
//               type='text'
//               placeholder='Enter venue name'
//               name='name'
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             {errors.name && <p className='text-danger'>{errors.name}</p>}
//           </Form.Group>

//           {/* Opis obiektu */}
//           <Form.Group className='mb-3' controlId='formBasicDescription'>
//             <CustomInput
//               as='textarea'
//               type='text'
//               placeholder='Enter venue description'
//               name='description'
//               value={formData.description}
//               onChange={handleChange}
//               required
//             />
//             {errors.description && <p className='text-danger'>{errors.description}</p>}
//           </Form.Group>

//           {/* Cena za noc */}
//           <Form.Group className='mb-3' controlId='formPricePerNight'>
//             <InputGroup>
//               <InputGroup.Text>
//                 <i className='bi bi-currency-euro'></i>
//               </InputGroup.Text>
//               <CustomInput
//                 type='number'
//                 placeholder='Enter price per night'
//                 name='price'
//                 value={formData.price === 0 ? "" : formData.price}
//                 onChange={(e) => {
//                   const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
//                   setFormData((prev) => ({ ...prev, price: value }));
//                 }}
//                 required
//               />
//             </InputGroup>
//             {errors.price && <p className='text-danger'>{errors.price}</p>}
//           </Form.Group>

//           {/* Maksymalna liczba gości */}
//           <Form.Group className='mb-3' controlId='formMaxGuests'>
//             <CustomInput
//               type='number'
//               placeholder='Enter maximum guests'
//               name='maxGuests'
//               value={formData.maxGuests === 0 ? "" : formData.maxGuests}
//               onChange={(e) => {
//                 const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
//                 setFormData((prev) => ({ ...prev, maxGuests: value }));
//               }}
//               required
//             />
//             {errors.maxGuests && <p className='text-danger'>{errors.maxGuests}</p>}
//           </Form.Group>

//           <MediaFormSection formData={formData} setFormData={setFormData} />
//           <ReactToggleButtons formValues={formValues} handleToggleChange={handleToggleChange} />

//           <CustomButton btnText='Register venue' variant='primary' type='submit' disabled={isSubmitting} />
//         </Form>
//       </div>
//     </Container>
//   );
// };

// export default RegisterNewVenue;
