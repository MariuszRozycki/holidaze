import { format } from "date-fns";

type SelectedDates = {
  startDate: Date | null;
  endDate: Date | null;
};

export const getSelectedDates = (selectedDates: SelectedDates | null): string => {
  if (!selectedDates || selectedDates.startDate === null || selectedDates.endDate === null) {
    return "Stay dates not chosen yet.";
  }
  const formatDate = (date: Date) => format(date, "dd-MM-yyyy");

  return `From: ${formatDate(selectedDates.startDate)} until: ${formatDate(selectedDates.endDate)}`;
};
