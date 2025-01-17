import { useEffect, useState } from "react";
import { ENDPOINTS } from "../../api/endpoints";
import { VenueResponse, Venue, Meta } from "../../types/api";

export const useFetchData = () => {
  const [data, setData] = useState<Venue[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Ustaw ładowanie na true
        console.log("Fetching data...");
        const response = await fetch(ENDPOINTS.venues);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: VenueResponse = await response.json();
        console.log("API Response:", result);
        setData(result.data);
        setMeta(result.meta);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false); // Zawsze ustaw ładowanie na false
      }
    };

    fetchData();
  }, []);

  return { data, meta, error, loading };
};
