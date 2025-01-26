import { Container } from "react-bootstrap";
import { GoBackButton, HeadingH1, RenderSignUpCustomer } from "../../components";

const SignUpAsCustomerPage = () => {
  return (
    <Container>
      <GoBackButton />
      <div className='page-element-wrapper'>
        <HeadingH1>Sign As a Customer</HeadingH1>
        <RenderSignUpCustomer />
      </div>
    </Container>
  );
};

export default SignUpAsCustomerPage;
