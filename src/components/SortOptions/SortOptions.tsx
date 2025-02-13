import React from "react";
import Select from "react-select";
import { useAppContext } from "../../context/app/useAppContext";
import { Row, Col, InputGroup } from "react-bootstrap";
import "./SortOptions.scss";

const sortOptions = [
  { value: "created", label: "Venues list" },
  { value: "price", label: "Price" },
  { value: "rating", label: "Rating" },
];

const SortOptions: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { sort, sortOrder } = state;

  const currentSortOption = sortOptions.find((option) => option.value === sort);

  const getOrderOptions = () => {
    switch (sort) {
      case "created":
        return [
          { value: "", label: "Default" },
          { value: "asc", label: "Oldest" },
          { value: "desc", label: "Newest" },
        ];
      case "price":
        return [
          { value: "", label: "Default" },
          { value: "asc", label: "Lowest Price" },
          { value: "desc", label: "Highest Price" },
        ];
      case "rating":
        return [
          { value: "", label: "Default" },
          { value: "asc", label: "Lowest Rating" },
          { value: "desc", label: "Highest Rating" },
        ];
      default:
        return [{ value: "", label: "Default" }];
    }
  };

  const orderOptions = getOrderOptions();

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
        <Col sm={12}>
          <InputGroup className='custom-select-wrapper'>
            <InputGroup.Text className='sort-input-label'>Sort</InputGroup.Text>
            <Select value={currentSortOption} onChange={handleSortChange} options={sortOptions} classNamePrefix='my-react-select' />
          </InputGroup>
        </Col>

        <Col sm={12} className='mt-3'>
          <InputGroup className='custom-select-wrapper'>
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
