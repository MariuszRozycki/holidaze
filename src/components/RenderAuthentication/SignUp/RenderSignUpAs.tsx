import { LinkButton } from "../../Buttons";

const RenderSignUpAs = () => {
  return (
    <div className='link-buttons-wrapper'>
      <LinkButton btnText='Customer' to='/holidaze/sign-up-page/sign-up-as-customer-page' />
      <LinkButton btnText='Venue Manager' to='/holidaze/sign-up-page/sign-up-as-manager-page' />
    </div>
  );
};

export default RenderSignUpAs;
