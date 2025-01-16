import { Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

interface SearchBarProps {
  handleClose: () => void;
}

const SearchBar = ({ handleClose }: SearchBarProps) => {
  return (
    <Container>
      <OverlayTrigger placement='bottom' overlay={<Tooltip id='tooltip-search'>Wpisz miejsce wycieczki</Tooltip>}>
        <Form
          className='d-flex w-md-25'
          onSubmit={(e) => {
            e.preventDefault();
            handleClose();
          }}
        >
          <Form.Control type='search' placeholder='Search for...' className='me-2' aria-label='Search' />
        </Form>
      </OverlayTrigger>
    </Container>
  );
};

export default SearchBar;
