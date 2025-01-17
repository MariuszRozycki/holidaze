import { useState } from "react";

export const useReactToggleButtons = () => {
  const [formValues, setFormValues] = useState({
    wifi: false,
    pets: false,
    breakfast: false,
    parking: false,
  });

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return { formValues, handleToggleChange };
};
