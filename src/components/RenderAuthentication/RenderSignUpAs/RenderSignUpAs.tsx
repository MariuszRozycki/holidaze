import { HeadingH1, HeadingH2, LinkButton } from "../../";

const RenderSignUpAs = () => {
  return (
    <div className='page-element-wrapper'>
      <HeadingH1>Sign up as...</HeadingH1>
      <HeadingH2>Choose your profile:</HeadingH2>
      <div className='link-buttons-wrapper'>
        <LinkButton btnText='Customer' to='/holidaze/sign-up-page/sign-up-as-customer-page' />
        <LinkButton btnText='Venue Manager' to='/holidaze/sign-up-page/sign-up-as-manager-page' />
      </div>
    </div>
  );
};

export default RenderSignUpAs;
