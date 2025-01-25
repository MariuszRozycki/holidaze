import { useState, useEffect } from "react";

export const useElementWidth = (ref: React.RefObject<HTMLElement>): number => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        console.log(ref.current.offsetWidth);

        setWidth(ref.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [ref]);

  return width;
};
