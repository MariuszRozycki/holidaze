import { Form } from "react-bootstrap";
import { CustomInput } from "../../FormComponents";
import { CreateNewVenueRequest } from "../../../types/api";

type VenueNameFieldProps = {
  formData: CreateNewVenueRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
  errors: Record<string, string>;
};

const VenueNameField = ({ formData, setFormData, errors }: VenueNameFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, name: value }));
  };

  return (
    <Form.Group className='mb-3' controlId='formBasicName'>
      <Form.Label>Venue Name</Form.Label>
      <CustomInput type='text' placeholder='Enter venue name' name='name' value={formData.name} onChange={handleChange} required />
      {errors.name && <p className='text-danger form-error'>{errors.name}</p>}
    </Form.Group>
  );
};

export default VenueNameField;

// import { Form } from "react-bootstrap";
// import { CustomInput } from "../../FormComponents";
// import { CreateNewVenueRequest } from "../../../types/api";

// type VenueNameFieldProps = {
//   formData: CreateNewVenueRequest;
//   setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
//   errors: { name: string };
// };

// const VenueNameField = ({ formData, setFormData, errors }: VenueNameFieldProps) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { value } = e.target;
//     setFormData((prev) => ({ ...prev, name: value }));
//   };

//   return (
//     <Form.Group className='mb-3' controlId='formBasicName'>
//       <Form.Label>Venue Name</Form.Label>
//       <CustomInput type='text' placeholder='Enter venue name' name='name' value={formData.name} onChange={handleChange} required />
//       {errors.name && <p className='text-danger form-error'>{errors.name}</p>}
//     </Form.Group>
//   );
// };

// export default VenueNameField;
