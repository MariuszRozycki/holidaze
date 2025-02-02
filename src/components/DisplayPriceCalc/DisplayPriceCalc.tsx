import { differenceInDays } from "date-fns";
import { useAppContext } from "../../context/app/useAppContext";
import "./DisplayPriceCalc.scss";

const DisplayPriceCalc = () => {
  const { state } = useAppContext();
  console.log(state);

  const totalNumberOfGuests = state.chosenTotalGuestsNumber;
  const start = state.selectedDates.startDate;
  const end = state.selectedDates.endDate;

  let numberOfNights = 0;
  if (start && end) {
    numberOfNights = differenceInDays(end, start);
  }

  const pricePerNight = state.selectedVenue?.price ?? 0;
  const totalPrice = numberOfNights * pricePerNight;

  return (
    <div className='mb-4'>
      <h3 className='fw-semibold h5'>Reservation summary:</h3>
      <div className='reservation-summary-wrapper'>
        <p>Number of nights: {numberOfNights}</p>
        <p>Number of guests: {totalNumberOfGuests}</p>
        <p>Price per night: {pricePerNight} €</p>
        <p className='fw-semibold'>Total price: {totalPrice} €</p>
      </div>
    </div>
  );
};

export default DisplayPriceCalc;
