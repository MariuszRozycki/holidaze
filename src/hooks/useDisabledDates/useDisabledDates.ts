import { useState, useEffect } from "react";
import { getDatesInRange } from "../../utils";

interface Booking {
  dateFrom: string;
  dateTo: string;
}

interface Venue {
  bookings?: Booking[];
  name: string;
}

export const useDisabledDates = (selectedVenue: Venue | null): Date[] => {
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  useEffect(() => {
    if (selectedVenue?.bookings) {
      const allBlockedDays: Date[] = selectedVenue.bookings.flatMap((booking) => {
        const from = new Date(booking.dateFrom);
        const to = new Date(booking.dateTo);
        return getDatesInRange(from, to);
      });

      setDisabledDates(allBlockedDays);

      console.log("Wybrane venue:", selectedVenue.name);
      console.log("Wszystkie zarezerwowane dni:", allBlockedDays);
    } else {
      setDisabledDates([]);
    }
  }, [selectedVenue]);

  return disabledDates;
};
