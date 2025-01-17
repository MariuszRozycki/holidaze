import { Form } from "react-bootstrap";
import Toggle from "react-toggle";
import "react-toggle/style.css";

type ToggleFormValues = {
  wifi: boolean;
  pets: boolean;
  breakfast: boolean;
  parking: boolean;
};

type ReactToggleButtonsProps = {
  formValues: ToggleFormValues;
  handleToggleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ReactToggleButtons: React.FC<ReactToggleButtonsProps> = ({ formValues, handleToggleChange }) => {
  return (
    <>
      <Form.Group className='mb-3'>
        <label>
          <span>Wi-Fi</span>
          <Toggle name='wifi' checked={formValues.wifi} onChange={handleToggleChange} />
        </label>
      </Form.Group>

      <Form.Group className='mb-3'>
        <label>
          <span>Pets</span>
          <Toggle name='pets' checked={formValues.pets} onChange={handleToggleChange} />
        </label>
      </Form.Group>

      <Form.Group className='mb-3'>
        <label>
          <span>Breakfast</span>
          <Toggle name='breakfast' checked={formValues.breakfast} onChange={handleToggleChange} />
        </label>
      </Form.Group>

      <Form.Group className='mb-3'>
        <label>
          <span>Parking</span>
          <Toggle name='parking' checked={formValues.parking} onChange={handleToggleChange} />
        </label>
      </Form.Group>
    </>
  );
};

export default ReactToggleButtons;
