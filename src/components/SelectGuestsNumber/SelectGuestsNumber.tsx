import { useState } from "react";
import { CustomGuestCounterModal } from "../../components";
import "./SelectGuestsNumber.scss";

const SelectGuestsNumber = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className='select-guests-wrapper' onClick={handleShow}>
        <h3 className='h5 fw-semibold mb-1'>Select guests:</h3>
        <p className='select-guests'>Select guests nr</p>

        {/* <button onClick={handleShow}>Show</button>
      <button onClick={handleClose}>Close</button> */}
      </div>
      <CustomGuestCounterModal show={show} onHide={handleClose} />
    </>
  );
};

export default SelectGuestsNumber;
