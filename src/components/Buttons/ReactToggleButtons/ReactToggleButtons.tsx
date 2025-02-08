import { Form } from "react-bootstrap";
import { CreateNewVenueRequest } from "../../../types/api";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./ReactToggleButtons.scss";

type ReactToggleButtonsProps = {
  meta: CreateNewVenueRequest["meta"];
  setMeta: (meta: CreateNewVenueRequest["meta"]) => void;
};

const ReactToggleButtons: React.FC<ReactToggleButtonsProps> = ({ meta, setMeta }) => {
  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setMeta({ ...meta, [name]: checked });
  };

  return (
    <>
      <Form.Group className='mb-3'>
        <label>
          <span>Wi-Fi</span>
          <Toggle name='wifi' checked={meta.wifi || false} onChange={handleToggleChange} />
        </label>
      </Form.Group>
      <Form.Group className='mb-3'>
        <label>
          <span>Pets</span>
          <Toggle name='pets' checked={meta.pets || false} onChange={handleToggleChange} />
        </label>
      </Form.Group>
      <Form.Group className='mb-3'>
        <label>
          <span>Breakfast</span>
          <Toggle name='breakfast' checked={meta.breakfast || false} onChange={handleToggleChange} />
        </label>
      </Form.Group>
      <Form.Group className='mb-3'>
        <label>
          <span>Parking</span>
          <Toggle name='parking' checked={meta.parking || false} onChange={handleToggleChange} />
        </label>
      </Form.Group>
    </>
  );
};

export default ReactToggleButtons;
