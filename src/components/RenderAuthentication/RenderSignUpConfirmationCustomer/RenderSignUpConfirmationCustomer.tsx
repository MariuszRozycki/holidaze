import { LogInButton } from "../../index";
import { useNavigateToElement } from "../../../hooks";
import { HeadingH1 } from "../..";

const RenderSignUpConfirmationCustomer = () => {
  const locationPath = "/holidaze/login-as-page/login-as-customer-page";
  const handleNavigate = useNavigateToElement({ locationPath });

  return (
    <div className='page-element-wrapper'>
      <HeadingH1>Customer registry confirmation</HeadingH1>
      <p className='fs-3'>Great!</p>
      <p className='fs-3'>You are register as a new customer!</p>
      <LogInButton onClick={handleNavigate} />
    </div>
  );
};

export default RenderSignUpConfirmationCustomer;
