import { Form } from "react-bootstrap";
import { CustomInput } from "../../FormComponents";
import { CreateNewVenueRequest } from "../../../types/api";

type LocationFormSectionProps = {
  formData: CreateNewVenueRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
};

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
        <Form.Label>Venue address</Form.Label>
        <CustomInput
          type='text'
          name='address'
          placeholder='Enter address'
          value={formData.location.address}
          onChange={(e) => handleLocationChange(e, "address")}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formCity'>
        <Form.Label>Venue city</Form.Label>
        <CustomInput
          type='text'
          name='city'
          placeholder='Enter city'
          value={formData.location.city}
          onChange={(e) => handleLocationChange(e, "city")}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formCountry'>
        <Form.Label>Venue country</Form.Label>
        <CustomInput
          type='text'
          name='country'
          placeholder='Enter country'
          value={formData.location.country}
          onChange={(e) => handleLocationChange(e, "country")}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formLat'>
        <Form.Label>Venue latitude</Form.Label>
        <CustomInput
          name='lat'
          type='number'
          placeholder='Enter latitude'
          value={formData.location.lat === 0 ? "" : formData.location.lat}
          onChange={(e) => handleLocationChange(e, "lat")}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formLng'>
        <Form.Label>Venue longitude</Form.Label>{" "}
        <CustomInput
          type='number'
          name='lng'
          placeholder='Enter longitude'
          value={formData.location.lng === 0 ? "" : formData.location.lng}
          onChange={(e) => handleLocationChange(e, "lng")}
        />
      </Form.Group>
    </>
  );
};

export default LocationFormSection;
