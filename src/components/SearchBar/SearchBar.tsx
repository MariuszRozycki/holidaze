import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/app/useAppContext";
import { Form, Button, InputGroup } from "react-bootstrap";

const SearchBar: React.FC = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch({ type: "SET_SEARCH_QUERY", payload: inputValue.trim() });
      navigate("/holidaze/search");
    } else {
      console.warn("Search query is empty");
    }
  };

  return (
    <Form onSubmit={handleSearch} className='search-bar mb-3'>
      <InputGroup>
        <Form.Control
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Search for venues...'
          className='me-2'
        />
        <Button type='submit' variant='primary'>
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
