import { useState } from "react";
import { useAppContext } from "../../context/app/useAppContext";

const SearchBar: React.FC = () => {
  const { dispatch } = useAppContext();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      dispatch({ type: "SET_SEARCH_QUERY", payload: inputValue.trim() });
    } else {
      console.warn("Search query is empty");
    }
  };

  return (
    <div className='search-bar bg-secondary mb-3 d-flex py-2 px-3 rounded-3'>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Search for venues...'
        className='form-control me-2'
      />
      <button onClick={handleSearch} className='btn btn-primary ms-2'>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
