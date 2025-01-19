import React from "react";
import Select from "react-select";
import { useAppContext } from "../../context/app/useAppContext";
import { Row, Col, InputGroup } from "react-bootstrap";
import "./SortOptions.scss";

const sortOptions = [
  { value: "created", label: "Newest" },
  { value: "price", label: "Price" },
  { value: "rating", label: "Rating" },
];

const orderOptions = [
  { value: "", label: "Default" },
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
];

const SortOptions: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { sort, sortOrder } = state;

  const currentSortOption = sortOptions.find((option) => option.value === sort);

  const currentOrderOption = orderOptions.find((option) => option.value === sortOrder);

  const handleSortChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      dispatch({ type: "SET_SORT", payload: selectedOption.value });
    }
  };

  const handleOrderChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      dispatch({ type: "SET_SORT_ORDER", payload: selectedOption.value });
    }
  };

  return (
    <div className='sort-options my-4'>
      <Row className='align-items-center'>
        <Col md={6}>
          <InputGroup className='custom-select-wrapper'>
            <InputGroup.Text className='sort-input-label'>Sort by</InputGroup.Text>
            <Select value={currentSortOption} onChange={handleSortChange} options={sortOptions} classNamePrefix='my-react-select' />
          </InputGroup>
        </Col>

        <Col md={6} className='mt-3 mt-md-0'>
          <InputGroup>
            <InputGroup.Text className='order-input-label'>Order</InputGroup.Text>
            <Select
              value={currentOrderOption}
              onChange={handleOrderChange}
              options={orderOptions}
              classNamePrefix='my-react-select'
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default SortOptions;
