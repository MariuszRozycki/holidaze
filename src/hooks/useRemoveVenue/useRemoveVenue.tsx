import { useState, useEffect } from "react";
import { useAppContext } from "../../context/app/useAppContext";
import { VENUE_ENDPOINTS } from "../../api/venueEndpoints";

export const useRemoveVenue = (venueId: string) => {
  const { state } = useAppContext();
  const managerName = state.userProfile?.name;

  const token = state.accessToken;
  const apiKey = state.apiKey;
  const [refreshVenues, setRefreshVenues] = useState(false);

  useEffect(() => {
    if (!managerName || !refreshVenues) return;

    if (!state.venues.find((v) => v.id === venueId)) {
      console.warn(`Venue with ID ${venueId} has been removed and will not be fetched.`);
      setRefreshVenues(false);
      return;
    }

    const fetchManagerVenues = async () => {
      try {
        const url = VENUE_ENDPOINTS.allVenuesMadeByProfile(managerName);

        const headers: HeadersInit = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        if (apiKey) {
          headers["X-Noroff-API-Key"] = apiKey;
        }

        const response = await fetch(url, {
          headers,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Venues refreshed:", result);
      } catch (error) {
        console.error("Error refreshing venues:", error);
      } finally {
        setRefreshVenues(false);
      }
    };

    fetchManagerVenues();
  }, [refreshVenues, token, apiKey, venueId, managerName, state.venues]);

  const removeVenue = async (venueId: string) => {
    if (!venueId || !token || !apiKey) {
      console.error("VenueID, token, or apiKey are not available.");
      return;
    }

    const url = VENUE_ENDPOINTS.venuesById(venueId);

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log(`Venue with id ${venueId} removed successfully.`);
      setRefreshVenues(true);
    } catch (error) {
      console.error("Error removing venue:", error);
    }
  };

  return removeVenue;
};

// import { useState, useEffect } from "react";
// import { useAppContext } from "../../context/app/useAppContext";
// import { VENUE_ENDPOINTS } from "../../api/venueEndpoints";

// export const useRemoveVenue = () => {
//   const { state } = useAppContext();
//   const token = state.accessToken;
//   const apiKey = state.apiKey;
//   const [refreshVenues, setRefreshVenues] = useState(false);

//   const removeVenue = async (venueId: string) => {
//     if (!venueId || !token || !apiKey || !venueId) {
//       console.error("VenueID id, token or apiKey are not available.");
//       return;
//     }

//     const url = VENUE_ENDPOINTS.removeVenue(venueId);

//     try {
//       const response = await fetch(url, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//           "X-Noroff-API-Key": apiKey,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       setRefreshVenues((prev) => !prev);

//       console.log(`Venue with id ${venueId} removed successfully.`);
//     } catch (error) {
//       console.error("Error removing venue:", error);
//     }
//   };

//   return removeVenue;
// };
