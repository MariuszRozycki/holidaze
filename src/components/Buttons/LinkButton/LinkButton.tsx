import { Link } from "react-router-dom";
import "./LinkButton.scss";

type LinkButtonProps = {
  btnText: string;
  to: string;
};

const LinkButton = ({ btnText, to }: LinkButtonProps) => (
  <Link to={to} className='link-button'>
    {btnText}
  </Link>
);

export default LinkButton;
