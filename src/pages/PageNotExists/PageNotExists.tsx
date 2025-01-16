import { Container } from "react-bootstrap";
import { HeadingH1, GoBackButton, GoToMainPageButton } from "../../components";

const PageNotExists = () => {
  return (
    <Container>
      <HeadingH1>Page not exists!</HeadingH1>
      <GoBackButton />
      <br />
      <GoToMainPageButton />
    </Container>
  );
};

export default PageNotExists;
