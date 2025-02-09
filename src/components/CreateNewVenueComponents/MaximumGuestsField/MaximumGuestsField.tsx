import { Form } from "react-bootstrap";
import { CustomInput } from "../../FormComponents";
import { CreateNewVenueRequest } from "../../../types/api";

type MaximumGuestsFieldProps = {
  formData: CreateNewVenueRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
  errors: Record<string, string>;
};

const MaximumGuestsField = ({ formData, setFormData, errors }: MaximumGuestsFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    setFormData((prev) => ({ ...prev, maxGuests: value }));
  };

  return (
    <Form.Group className='mb-3' controlId='formMaxGuests'>
      <Form.Label>Maximum Guests</Form.Label>
      <CustomInput
        type='number'
        placeholder='Enter maximum guests'
        name='maxGuests'
        value={formData.maxGuests === 0 ? "" : formData.maxGuests}
        onChange={handleChange}
        required
      />
      {errors.maxGuests && <p className='text-danger form-error'>{errors.maxGuests}</p>}
    </Form.Group>
  );
};

export default MaximumGuestsField;

// import { Form } from "react-bootstrap";
// import { CustomInput } from "../../FormComponents";
// import { CreateNewVenueRequest } from "../../../types/api";

// type MaximumGuestsFieldProps = {
//   formData: CreateNewVenueRequest;
//   setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
//   errors: { maxGuests: string };
// };

// const MaximumGuestsField = ({ formData, setFormData, errors }: MaximumGuestsFieldProps) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
//     setFormData((prev) => ({ ...prev, maxGuests: value }));
//   };

//   return (
//     <Form.Group className='mb-3' controlId='formMaxGuests'>
//       <Form.Label>Venue number of maximum guests</Form.Label>
//       <CustomInput
//         type='number'
//         placeholder='Enter maximum guests'
//         name='maxGuests'
//         value={formData.maxGuests === 0 ? "" : formData.maxGuests}
//         onChange={handleChange}
//         required
//       />
//       {errors.maxGuests && <p className='text-danger form-error'>{errors.maxGuests}</p>}
//     </Form.Group>
//   );
// };

// export default MaximumGuestsField;
