import { LogInButton } from "../../index";
import { useNavigateToElement } from "../../../hooks";
import { GoBackButton, HeadingH1 } from "../../";

const RenderConfirmationCustomer = () => {
  const locationPath = "/holidaze/login-as-user";
  const handleNavigateTo = useNavigateToElement({ locationPath });

  return (
    <div className='page-element-wrapper'>
      <GoBackButton />
      <HeadingH1>Customer registry confirmation</HeadingH1>
      <div className='content-page-wrapper'>
        <p className='fs-3'>You are register as a new customer!</p>
        <LogInButton onClick={handleNavigateTo} />
      </div>
    </div>
  );
};

export default RenderConfirmationCustomer;
