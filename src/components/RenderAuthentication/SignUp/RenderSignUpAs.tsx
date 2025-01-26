import { LinkButton } from "../../Buttons";

const RenderSignUpAs = () => {
  return (
    <div className='link-buttons-wrapper'>
      <LinkButton btnText='Customer' to='/holidaze/sign-up-as-customer-page' />
      <LinkButton btnText='Venue Manager' to='/holidaze/sign-up-as-manager' />
    </div>
  );
};

export default RenderSignUpAs;
