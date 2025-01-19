import React from "react";
import { useAppContext } from "../../context/app/useAppContext";

const SortOptions: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { sort, sortOrder } = state;

  const handleSortFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    console.log("Sort Field:", selectedSort);
    dispatch({ type: "SET_SORT", payload: selectedSort });
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrder = e.target.value;
    console.log("Sort Order:", selectedOrder);
    dispatch({ type: "SET_SORT_ORDER", payload: selectedOrder });
  };

  return (
    <div className='sort-options mb-3 d-flex align-items-center'>
      <label htmlFor='sortField' className='me-2'>
        Sort by:
      </label>
      <select id='sortField' value={sort} onChange={handleSortFieldChange} className='form-select me-3'>
        <option value='created'>Newest</option>
        <option value='price'>Price</option>
        <option value='rating'>Rating</option>
      </select>

      <label htmlFor='sortOrder' className='me-2'>
        Order:
      </label>
      <select id='sortOrder' value={sortOrder} onChange={handleSortOrderChange} className='form-select'>
        <option value=''>Default</option>
        <option value='asc'>Ascending</option>
        <option value='desc'>Descending</option>
      </select>
    </div>
  );
};

export default SortOptions;
