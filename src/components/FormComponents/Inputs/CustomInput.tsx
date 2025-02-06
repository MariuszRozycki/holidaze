import { Form } from "react-bootstrap";
import "./CustomInput.scss";

type CustomInputProps = {
  name: string;
  placeholder: string;
  value: string | number | undefined;
  type: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readOnly?: boolean;
  className?: string;
  required?: boolean;
  as?: React.ElementType;
  min?: string;
  max?: string;
};

const CustomInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  onClick,
  onFocus,
  onBlur,
  readOnly,
  as,
  min,
  max,
}: CustomInputProps) => {
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
      as={as}
      onFocus={onFocus}
      onBlur={onBlur}
      min={min}
      max={max}
    />
  );
};

export default CustomInput;
