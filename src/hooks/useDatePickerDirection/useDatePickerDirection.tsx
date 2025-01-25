import { useState, useEffect } from "react";
import breakpoints from "../../scss/global/breakpoints";

export const useDatePickerDirection = (): "horizontal" | "vertical" => {
  const [direction, setDirection] = useState<"horizontal" | "vertical">("vertical");

  const updateDirection = () => {
    if (window.matchMedia(`(max-width: ${breakpoints.md}px)`).matches) {
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

  return direction;
};
