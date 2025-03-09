import { HeadingH1, HeadingH2, LinkButton } from "../../";
import "./RenderLoginAs.scss";

const RenderLoginAs = () => {
  return (
    <div className='page-element-wrapper'>
      <HeadingH1>Login as...</HeadingH1>
      <HeadingH2>Choose your profile</HeadingH2>
      <div className='link-buttons-wrapper'>
        <LinkButton btnText='Customer' to='/holidaze/login-as-page/login-as-customer-page' />
        <LinkButton btnText='Venue Manager' to='/holidaze/login-as-page/login-as-manager-page' />
      </div>
    </div>
  );
};

export default RenderLoginAs;
