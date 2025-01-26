import { Form } from "react-bootstrap";
import "./CustomInput.scss";

type CustomInputProps = {
  type: string;
  placeholder: string;
  className?: string;
};

const CustomInput = ({ type, placeholder }: CustomInputProps) => {
  return <Form.Control type={type} placeholder={placeholder} className='custom-input' />;
};

export default CustomInput;
