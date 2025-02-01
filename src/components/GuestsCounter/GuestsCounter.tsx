import { useState } from "react";
import { useAppContext } from "../../context/app/useAppContext";
import { BookVenueNotLoggedButton } from "../../components";
import "./GuestsCounter.scss";

type GuestCounterProps = {
  className?: string;
};

const GuestsCounter = ({ className }: GuestCounterProps) => {
  const { state } = useAppContext();
  const maxGuests = state.selectedVenue?.maxGuests ?? 0;

  const [adultsCounter, setAdultsCounter] = useState<number>(0);
  const [kidsCounter, setKidsCounter] = useState<number>(0);

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
        </p>
      </div>

      <BookVenueNotLoggedButton />
    </fieldset>
  );
};

export default GuestsCounter;
