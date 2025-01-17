declare module "react-toggle" {
  import { DetailedHTMLProps, InputHTMLAttributes } from "react";

  export interface ToggleProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icons?: boolean | { checked: JSX.Element; unchecked: JSX.Element };
  }

  const Toggle: React.FC<ToggleProps>;
  export default Toggle;
}
