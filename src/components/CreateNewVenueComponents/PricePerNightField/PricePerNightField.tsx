import { Form, InputGroup } from "react-bootstrap";
import { CustomInput } from "../../FormComponents";
import { CreateNewVenueRequest } from "../../../types/api";

type PricePerNightFieldProps = {
  formData: CreateNewVenueRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
  errors: Record<string, string>;
};

const PricePerNightField = ({ formData, setFormData, errors }: PricePerNightFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
    setFormData((prev) => ({ ...prev, price: value }));
  };

  return (
    <Form.Group className='mb-3' controlId='formPricePerNight'>
      <Form.Label>Venue Price Per Night</Form.Label>
      <InputGroup>
        <InputGroup.Text>
          <i className='bi bi-currency-euro'></i>
        </InputGroup.Text>
        <CustomInput
          type='number'
          placeholder='Enter price per night'
          name='price'
          value={formData.price === 0 ? "" : formData.price}
          onChange={handleChange}
          required
        />
      </InputGroup>
      {errors.price && <p className='text-danger form-error'>{errors.price}</p>}
    </Form.Group>
  );
};

export default PricePerNightField;
