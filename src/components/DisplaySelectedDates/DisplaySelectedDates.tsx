import { format } from "date-fns";
import { useAppContext } from "../../context/app/useAppContext";
import "./DisplaySelectedDates.scss";

type DisplaySelectedDatesProps = {
  onClick: () => void;
};

const DisplaySelectedDates = ({ onClick }: DisplaySelectedDatesProps) => {
  const { state } = useAppContext();
  const { selectedDates } = state;
  const startDateString: Date | null = selectedDates?.startDate;
  const endDateString: Date | null = selectedDates?.endDate;

  const startDate = startDateString ? new Date(startDateString) : null;
  const endDate = endDateString ? new Date(endDateString) : null;

  const formattedStartDate = startDate ? format(startDate, "dd MMM yyyy") : "date not selected";
  const formattedEndDate = endDate ? format(endDate, "dd MM yyyy") : "date not selected";

  return (
    <div onClick={onClick} className='display-selected-dates-wrapper'>
      <h3 className='h5 fw-semibold mb-1'>Choose dates:</h3>
      <div className='display-selected-dates'>
        <p>
          <i className='bi bi-calendar-range me-2'></i>From: {formattedStartDate}
        </p>
      </div>
      <div className='display-selected-dates'>
        <p>
          <i className='bi bi-calendar-range me-2'></i>To: {formattedEndDate}
        </p>
      </div>
    </div>
  );
};

export default DisplaySelectedDates;
