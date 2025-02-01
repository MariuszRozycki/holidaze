import "./GuestsCounter.scss";

type GuestCounterProps = {
  className?: string;
};

const GuestsCounter = ({ className }: GuestCounterProps) => {
  return (
    <fieldset className={`guests-counter className ${className}`}>
      <legend>Choose quantity of guests</legend>

      <div className='guest-type'>
        <label htmlFor='adult-count'>Adults:</label>
        <div className='counter'>
          <button type='button' aria-label='Zmniejsz liczbę dorosłych'>
            -
          </button>
          <output id='adult-count'>3</output>
          <button type='button' aria-label='Zwiększ liczbę dorosłych'>
            +
          </button>
        </div>
      </div>

      <div className='guest-type'>
        <label htmlFor='child-count'>Kids:</label>
        <div className='counter'>
          <button type='button' aria-label='Zmniejsz liczbę dzieci'>
            -
          </button>
          <output id='child-count'>3</output>
          <button type='button' aria-label='Zwiększ liczbę dzieci'>
            +
          </button>
        </div>
      </div>
    </fieldset>
  );
};

export default GuestsCounter;
