import { useState, useEffect } from "react";
import { DateRange, Range } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import breakpoints from "../../scss/global/breakpoints";

const DatePicker = () => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [direction, setDirection] = useState<"horizontal" | "vertical">("vertical");

  const updateDirection = () => {
    if (window.matchMedia(`(max-width: ${breakpoints.md + "px"})`).matches) {
      setDirection("vertical");
    } else {
      setDirection("horizontal");
    }
  };

  useEffect(() => {
    updateDirection();
    window.addEventListener("resize", updateDirection);
    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      months={2}
      direction={direction}
    />
  );
};

export default DatePicker;
