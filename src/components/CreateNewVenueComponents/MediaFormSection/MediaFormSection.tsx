import { Form, Button } from "react-bootstrap";
import { CreateNewVenueRequest } from "../../../types/api";

interface MediaFormSectionProps {
  formData: CreateNewVenueRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
}

const MediaFormSection = ({ formData, setFormData }: MediaFormSectionProps) => {
  const handleMediaChange = (index: number, field: "url" | "alt", value: string) => {
    const media = [...formData.media];
    media[index] = { ...media[index], [field]: value };
    setFormData((prev) => ({ ...prev, media }));
  };

  const addMediaInput = () => {
    setFormData((prev) => ({
      ...prev,
      media: [...prev.media, { url: "", alt: "" }],
    }));
  };

  return (
    <>
      {formData.media.map((media, index) => (
        <Form.Group key={index} className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Image URL'
            value={media.url}
            onChange={(e) => handleMediaChange(index, "url", e.target.value)}
          />

          <Form.Control
            type='text'
            placeholder='Image Alt Text'
            value={media.alt}
            onChange={(e) => handleMediaChange(index, "alt", e.target.value)}
          />
        </Form.Group>
      ))}
      <Button onClick={addMediaInput}>Add Image</Button>
    </>
  );
};

export default MediaFormSection;
