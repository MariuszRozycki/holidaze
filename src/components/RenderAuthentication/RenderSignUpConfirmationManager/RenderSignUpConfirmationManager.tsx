import { LogInButton } from "../../index";
import { useNavigateToElement } from "../../../hooks";
import { HeadingH1 } from "../..";
import "./RenderSignUpConfirmationManager.scss";

const RenderSignUpConfirmationManager = () => {
  const locationPath = "/holidaze/login-as-page/login-as-manager-page";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <div className='page-element-wrapper'>
      <HeadingH1>Venue manager registry confirmation</HeadingH1>
      <p className='fs-3'>Great!</p>
      <p className='fs-3'>You are register as a new venue manager!</p>
      <LogInButton className='log-in-confirmation-button' onClick={handleNavigate} />
    </div>
  );
};

export default RenderSignUpConfirmationManager;
