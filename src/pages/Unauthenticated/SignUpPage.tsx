import { Container } from "react-bootstrap";
import { HeadingH1, HeadingH2, RenderSignUpAs } from "../../components";

const SignUpPage = () => {
  return (
    <Container>
      <div className='page-element-wrapper'>
        <HeadingH1>Sign up as...</HeadingH1>
        <HeadingH2 className='mb-5'>Choose your profile</HeadingH2>
        <RenderSignUpAs />
      </div>
    </Container>
  );
};

export default SignUpPage;
