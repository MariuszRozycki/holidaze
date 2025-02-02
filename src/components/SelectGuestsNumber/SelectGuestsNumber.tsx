import { useState } from "react";
import { CustomGuestCounterModal } from "../../components";
import "./SelectGuestsNumber.scss";

type SelectGuestsNumberProps = {
  totalGuestNumber: number | undefined;
};

const SelectGuestsNumber = ({ totalGuestNumber }: SelectGuestsNumberProps) => {
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
        <p className='select-guests'>
          {totalGuestNumber ? (
            <>
              <i className='bi bi-people-fill me-2' /> Number of guests: {totalGuestNumber}
            </>
          ) : (
            <>
              <i className='bi bi-people-fill me-2' />
              Select guests nr
            </>
          )}
        </p>
      </div>
      <CustomGuestCounterModal show={show} onHide={handleClose} />
    </>
  );
};

export default SelectGuestsNumber;
