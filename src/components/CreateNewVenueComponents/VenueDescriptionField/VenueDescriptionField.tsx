import { Form } from "react-bootstrap";
import { CustomInput } from "../../FormComponents";
import { CreateNewVenueRequest } from "../../../types/api";

type VenueDescriptionFieldProps = {
  formData: CreateNewVenueRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
  errors: Record<string, string>;
};

const VenueDescriptionField = ({ formData, setFormData, errors }: VenueDescriptionFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, description: value }));
  };

  return (
    <Form.Group className='mb-3' controlId='formBasicDescription'>
      <Form.Label>Venue Description</Form.Label>
      <CustomInput
        className='custom-textarea-description'
        as='textarea'
        type='text'
        placeholder='Enter venue description'
        name='description'
        value={formData.description}
        onChange={handleChange}
        required
      />
      {errors.description && <p className='text-danger form-error'>{errors.description}</p>}
    </Form.Group>
  );
};

export default VenueDescriptionField;

// import { Form } from "react-bootstrap";
// import { CustomInput } from "../../FormComponents";
// import { CreateNewVenueRequest } from "../../../types/api";

// type VenueDescriptionFieldProps = {
//   formData: CreateNewVenueRequest;
//   setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
//   errors: { description: string };
// };

// const VenueDescriptionField = ({ formData, setFormData, errors }: VenueDescriptionFieldProps) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { value } = e.target;
//     setFormData((prev) => ({ ...prev, description: value }));
//   };

//   return (
//     <Form.Group className='mb-3' controlId='formBasicDescription'>
//       <Form.Label>Venue description</Form.Label>
//       <CustomInput
//         className='custom-textarea-description'
//         as='textarea'
//         type='text'
//         placeholder='Enter venue description'
//         name='description'
//         value={formData.description}
//         onChange={handleChange}
//         required
//       />
//       {errors.description && <p className='text-danger form-error'>{errors.description}</p>}
//     </Form.Group>
//   );
// };

// export default VenueDescriptionField;
