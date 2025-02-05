import { Form } from "react-bootstrap";
import "./CustomInput.scss";

type CustomInputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  readOnly?: boolean;
  className?: string;
  required?: boolean;
  as?: string;
};

const CustomInput = ({ type, name, placeholder, value, onChange, className, onClick, readOnly }: CustomInputProps) => {
  return (
    <Form.Control
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`custom-input ${className}`}
      onClick={onClick}
      readOnly={readOnly}
    />
  );
};

export default CustomInput;
