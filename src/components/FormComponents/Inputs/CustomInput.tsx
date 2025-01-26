import { Form } from "react-bootstrap";
import "./CustomInput.scss";

type CustomInputProps = {
  type: string;
  placeholder: string;
  className?: string;
};

const CustomInput = ({ type, placeholder, className }: CustomInputProps) => {
  return <Form.Control type={type} placeholder={placeholder} className={className} />;
};

export default CustomInput;
