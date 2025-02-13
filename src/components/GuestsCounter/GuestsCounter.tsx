import { useState } from "react";
import { useAppContext } from "../../context/app/useAppContext";
import { CustomButton } from "../";
import "./GuestsCounter.scss";

type GuestCounterProps = {
  onHide?: () => void;
  className?: string;
};

const GuestsCounter = ({ className, onHide }: GuestCounterProps) => {
  const { state, dispatch } = useAppContext();
  const [adultsCounter, setAdultsCounter] = useState<number>(0);
  const [kidsCounter, setKidsCounter] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const maxGuests = state.selectedVenue?.maxGuests ?? 0;
  const totalGuests = adultsCounter + kidsCounter;

  const decrementAdults = () => {
    setAdultsCounter((prevAdults) => (prevAdults > 0 ? prevAdults - 1 : prevAdults));
  };

  const incrementAdults = () => {
    setAdultsCounter((prevAdults) => {
      const currentTotal = prevAdults + kidsCounter;

      if (currentTotal < maxGuests) {
        return prevAdults + 1;
      } else {
        return prevAdults;
      }
    });
  };

  const decrementKids = () => {
    setKidsCounter((prevKids) => (prevKids > 0 ? prevKids - 1 : prevKids));
  };

  const incrementKids = () => {
    setKidsCounter((prevKids) => {
      const currentTotal = adultsCounter + prevKids;
      if (currentTotal < maxGuests) {
        return prevKids + 1;
      } else {
        return prevKids;
      }
    });
  };

  const handleGuestCounterBtnConfirm = () => {
    if (totalGuests === 0) {
      setErrorMessage("Number of guests must be chosen to make reservation!");
      return;
    }

    dispatch({
      type: "CHOSEN_TOTAL_GUESTS_NUMBER",
      payload: totalGuests,
    });

    onHide?.();
  };

  return (
    <fieldset className={`guests-counter mt-4 ${className}`}>
      <legend className='mb-0'>Choose guests:</legend>

      <div className='guest-type fs-5'>
        <label htmlFor='adult-count'>Adults:</label>
        <div className='counter'>
          <button type='button' aria-label='Zmniejsz liczbę dorosłych' onClick={decrementAdults}>
            -
          </button>
          <output id='adult-count'>{adultsCounter}</output>
          <button type='button' aria-label='Zwiększ liczbę dorosłych' onClick={incrementAdults}>
            +
          </button>
        </div>
      </div>

      <div className='guest-type fs-5'>
        <label htmlFor='child-count'>Kids:</label>
        <div className='counter'>
          <button type='button' aria-label='Zmniejsz liczbę dzieci' onClick={decrementKids}>
            -
          </button>
          <output id='child-count'>{kidsCounter}</output>
          <button type='button' aria-label='Zwiększ liczbę dzieci' onClick={incrementKids}>
            +
          </button>
        </div>
      </div>

      <div className='total-guests'>
        <p className='fs-5'>
          Total guests: {totalGuests} / {maxGuests}
          {errorMessage && <p className='text-danger text-center bg-danger-subtle px-2 py-1 rounded'>{errorMessage}</p>}
        </p>
      </div>
      <div className='guest-counter-btn-wrapper'>
        <CustomButton className='guest-counter-btn-confirm fs-5' btnText='Confirm' onClick={handleGuestCounterBtnConfirm} />
        <CustomButton className='guest-counter-btn-cancel fs-5' btnText='Cancel' onClick={onHide} />
      </div>
    </fieldset>
  );
};

export default GuestsCounter;
