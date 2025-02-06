import { Form } from "react-bootstrap";
import { CustomInput } from "../../FormComponents";
import { CreateNewVenueRequest } from "../../../types/api";

type Props = {
  formData: CreateNewVenueRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
  errors: { description: string };
};

const VenueDescriptionField = ({ formData, setFormData, errors }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, description: value }));
  };

  return (
    <Form.Group className='mb-3' controlId='formBasicDescription'>
      <CustomInput
        as='textarea'
        type='text'
        placeholder='Enter venue description'
        name='description'
        value={formData.description}
        onChange={handleChange}
        required
      />
      {errors.description && <p className='text-danger'>{errors.description}</p>}
    </Form.Group>
  );
};

export default VenueDescriptionField;
