import { useState } from "react";
import { DateRange, Range } from "react-date-range";
import { addDays } from "date-fns";

const DatePicker = () => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      months={2}
      direction='vertical'
    />
  );
};

export default DatePicker;
