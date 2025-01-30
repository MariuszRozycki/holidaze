// import { format } from "date-fns";
// import { useAppContext } from "../../context/app/useAppContext";
// import "./DisplaySelectedDates.scss";

// type DisplaySelectedDatesProps = {
//   onClick: () => void;
// };

// const DisplaySelectedDates = ({ onClick }: DisplaySelectedDatesProps) => {
//   const { state } = useAppContext();
//   const { selectedDates } = state;
//   console.log(selectedDates);
//   const startDateString: Date | null = selectedDates?.startDate;
//   const endDateString: Date | null = selectedDates?.endDate;

//   const startDate = startDateString ? new Date(startDateString) : null;
//   const endDate = endDateString ? new Date(endDateString) : null;

//   const formattedStartDate = startDate ? format(startDate, "dd MMM yyyy") : "Start date not selected";
//   const formattedEndDate = endDate ? format(endDate, "dd MM yyyy") : "End date not selected";
//   console.log(formattedStartDate);

//   return (
//     <div onClick={onClick} className='display-selected-dates-wrapper'>
//       <div className='display-selected-dates'>
//         <p>
//           <i className='bi bi-calendar-range me-2'></i>
//           {formattedStartDate}
//         </p>
//       </div>
//       <div className='display-selected-dates'>
//         <p>
//           <i className='bi bi-calendar-range me-2'></i>
//           {formattedEndDate}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DisplaySelectedDates;

import { format } from "date-fns";
import { useAppContext } from "../../context/app/useAppContext";
import "./DisplaySelectedDates.scss";

type DisplaySelectedDatesProps = {
  onClick: () => void;
};

const DisplaySelectedDates = ({ onClick }: DisplaySelectedDatesProps) => {
  const { state } = useAppContext();
  const { selectedDates } = state;
  console.log(selectedDates);
  const startDateString: Date | null = selectedDates?.startDate;
  const endDateString: Date | null = selectedDates?.endDate;

  const startDate = startDateString ? new Date(startDateString) : null;
  const endDate = endDateString ? new Date(endDateString) : null;

  const formattedStartDate = startDate ? format(startDate, "dd MMM yyyy") : "date not selected";
  const formattedEndDate = endDate ? format(endDate, "dd MM yyyy") : "date not selected";
  console.log(formattedStartDate);

  return (
    <div onClick={onClick} className='display-selected-dates-wrapper'>
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
