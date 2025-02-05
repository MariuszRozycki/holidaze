import { Form, FloatingLabel } from "react-bootstrap";
import { CreateNewVenueRequest } from "../../../types/api";

interface LocationFormSectionProps {
  formData: CreateNewVenueRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
}

const LocationFormSection = ({ formData, setFormData }: LocationFormSectionProps) => {
  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    locationField: keyof CreateNewVenueRequest["location"]
  ) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [locationField]: ["lat", "lng"].includes(locationField) ? parseFloat(value) || 0 : value,
      },
    }));
  };

  return (
    <>
      <Form.Group className='mb-3' controlId='formAddress'>
        <FloatingLabel label='Address'>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={formData.location.address}
            onChange={(e) => handleLocationChange(e, "address")}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formCity'>
        <FloatingLabel label='City'>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={formData.location.city}
            onChange={(e) => handleLocationChange(e, "city")}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formLat'>
        <FloatingLabel label='Latitude'>
          <Form.Control
            type='number'
            placeholder='Enter latitude'
            value={formData.location.lat}
            onChange={(e) => handleLocationChange(e, "lat")}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formLng'>
        <FloatingLabel label='Longitude'>
          <Form.Control
            type='number'
            placeholder='Enter longitude'
            value={formData.location.lng}
            onChange={(e) => handleLocationChange(e, "lng")}
          />
        </FloatingLabel>
      </Form.Group>
    </>
  );
};

export default LocationFormSection;
