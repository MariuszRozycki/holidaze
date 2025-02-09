import { Form } from "react-bootstrap";
import { CreateNewVenueRequest } from "../../../types/api";
import { CustomInput } from "../../FormComponents";
import { CustomButton } from "../../";
import "./MediaFormSection.scss";

interface MediaFormSectionProps {
  formData: CreateNewVenueRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
  errors: Record<string, string>;
}

const MediaFormSection = ({ formData, setFormData, errors }: MediaFormSectionProps) => {
  if (formData.media.length === 0) {
    setFormData((prev) => ({
      ...prev,
      media: [{ url: "", alt: "" }],
    }));
  }

  const handleMediaChange = (index: number, field: "url" | "alt", value: string) => {
    const media = [...formData.media];
    media[index] = { ...media[index], [field]: value };
    setFormData((prev) => ({ ...prev, media }));
  };

  const addMediaInput = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      media: [...prev.media, { url: "", alt: "" }],
    }));
  };

  return (
    <>
      {formData.media.map((media, index) => {
        const urlErrorKey = `media.${index}.url`;

        return (
          <Form.Group key={index} className='mb-3'>
            <Form.Label>Venue Image URL</Form.Label>
            <CustomInput
              name={`image-url-${index}`}
              type='text'
              placeholder='Image URL'
              value={media.url}
              onChange={(e) => handleMediaChange(index, "url", e.target.value)}
            />
            {errors[urlErrorKey] && <p className='text-danger form-error'>{errors[urlErrorKey]}</p>}

            <Form.Label>Venue Image Alt Text</Form.Label>
            <CustomInput
              className='mt-3'
              name={`image-alt-text-${index}`}
              type='text'
              placeholder='Image Alt Text'
              value={media.alt}
              onChange={(e) => handleMediaChange(index, "alt", e.target.value)}
            />
          </Form.Group>
        );
      })}
      <CustomButton className='add-image-register-new-venue-button' type='button' btnText='Add Image' onClick={addMediaInput} />
    </>
  );
};

export default MediaFormSection;

// import { Form } from "react-bootstrap";
// import { CreateNewVenueRequest } from "../../../types/api";
// import { CustomInput } from "../../FormComponents";
// import { CustomButton } from "../../";
// import "./MediaFormSection.scss";

// interface MediaFormSectionProps {
//   formData: CreateNewVenueRequest;
//   setFormData: React.Dispatch<React.SetStateAction<CreateNewVenueRequest>>;
// }

// const MediaFormSection = ({ formData, setFormData }: MediaFormSectionProps) => {
//   if (formData.media.length === 0) {
//     setFormData((prev) => ({
//       ...prev,
//       media: [{ url: "", alt: "" }],
//     }));
//   }

//   const handleMediaChange = (index: number, field: "url" | "alt", value: string) => {
//     const media = [...formData.media];
//     media[index] = { ...media[index], [field]: value };
//     setFormData((prev) => ({ ...prev, media }));
//   };

//   const addMediaInput = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setFormData((prev) => ({
//       ...prev,
//       media: [...prev.media, { url: "", alt: "" }],
//     }));
//   };

//   return (
//     <>
//       {formData.media.map((media, index) => (
//         <Form.Group key={index} className='mb-3'>
//           <Form.Label>Venue image URL</Form.Label>
//           <CustomInput
//             className='mb-3'
//             name='image-url'
//             type='text'
//             placeholder='Image URL'
//             value={media.url}
//             onChange={(e) => handleMediaChange(index, "url", e.target.value)}
//           />
//           <Form.Label>Venue image alt text</Form.Label>
//           <CustomInput
//             name='image-alt-text'
//             type='text'
//             placeholder='Image Alt Text'
//             value={media.alt}
//             onChange={(e) => handleMediaChange(index, "alt", e.target.value)}
//           />
//         </Form.Group>
//       ))}
//       <CustomButton className='add-image-register-new-venue-button' type='button' btnText='Add Image' onClick={addMediaInput} />
//     </>
//   );
// };

// export default MediaFormSection;
