import { useState } from "react";
import { useAppContext } from "../../context/app/useAppContext";
import { useDatePickerDirection } from "../../hooks";
import { useDisabledDates } from "../../hooks";
import { enGB } from "date-fns/locale";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import { startOfDay, endOfDay, addDays } from "date-fns";
import { DatePickerFunctionalButton } from "../../components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./DatePicker.scss";

type DatePickerProps = {
  onHide: () => void;
};

const DatePicker = ({ onHide }: DatePickerProps) => {
  const { state, dispatch } = useAppContext();
  const { selectedVenue } = state;
  const direction = useDatePickerDirection();
  const disabledDates = useDisabledDates(selectedVenue);

  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const handleDateChange = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    setRange([selection]);
  };

  const handleCancelClick = () => {
    onHide();
  };

  const handleChooseClick = () => {
    const selection = range[0];

    dispatch({
      type: "SET_SELECTED_DATES",
      payload: {
        startDate: startOfDay(selection.startDate!),
        endDate: endOfDay(selection.endDate!),
      },
    });

    onHide();
  };

  return (
    <>
      <DateRange
        locale={enGB}
        editableDateInputs={true}
        onChange={handleDateChange}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={2}
        direction={direction}
        disabledDates={disabledDates}
        minDate={startOfDay(new Date())}
      />

      <div className='buttons-wrapper'>
        <DatePickerFunctionalButton btnText='Cancel' onClick={handleCancelClick} />
        <DatePickerFunctionalButton btnText='Choose' onClick={handleChooseClick} />
      </div>
    </>
  );
};

export default DatePicker;
