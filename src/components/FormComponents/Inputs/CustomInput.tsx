import { Form } from "react-bootstrap";
import "./CustomInput.scss";

type CustomInputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const CustomInput = ({ type, name, placeholder, value, onChange, onClick, readOnly }: CustomInputProps) => {
  return (
    <Form.Control type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className='custom-input' />
  );
};

export default CustomInput;
