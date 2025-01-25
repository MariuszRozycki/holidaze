import { Venue, Meta } from "../types/api";

export type Action =
  | { type: "FETCH_VENUES_START" }
  | { type: "FETCH_VENUES_SUCCESS"; payload: { data: Venue[]; meta: Meta } }
  | { type: "FETCH_VENUES_ERROR"; payload: string }
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_SORT"; payload: string }
  | { type: "SET_SORT_ORDER"; payload: string }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SEARCH_VENUES_START" }
  | { type: "SEARCH_VENUES_SUCCESS"; payload: Venue[] }
  | { type: "SEARCH_VENUES_ERROR"; payload: string }
  | { type: "FETCH_VENUE_DETAILS_START" }
  | { type: "FETCH_VENUE_DETAILS_SUCCESS"; payload: Venue }
  | { type: "FETCH_VENUE_DETAILS_ERROR"; payload: string }
  | { type: "SET_SELECTED_DATES"; payload: { startDate: Date; endDate: Date } };

export interface AppState {
  venues: Venue[];
  selectedVenue: Venue | null;
  meta: Meta | null;
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  sort: string;
  sortOrder: string;
  isSearching: boolean;
  searchQuery: string;
  selectedDates: { startDate: Date | null; endDate: Date | null };
}

export const initialState: AppState = {
  venues: [],
  selectedVenue: null,
  meta: null,
  isLoading: false,
  error: null,
  currentPage: 1,
  sort: "created",
  sortOrder: "",
  isSearching: false,
  searchQuery: "",
  selectedDates: {
    startDate: null,
    endDate: null,
  },
};

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "FETCH_VENUES_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_VENUES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        venues: action.payload.data,
        meta: action.payload.meta,
      };
    case "FETCH_VENUES_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "FETCH_VENUE_DETAILS_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_VENUE_DETAILS_SUCCESS":
      return { ...state, isLoading: false, selectedVenue: action.payload };
    case "FETCH_VENUE_DETAILS_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "SET_SORT_ORDER":
      return { ...state, sortOrder: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SEARCH_VENUES_START":
      return { ...state, isSearching: true, error: null };
    case "SEARCH_VENUES_SUCCESS":
      return { ...state, isSearching: false, venues: action.payload };
    case "SEARCH_VENUES_ERROR":
      return { ...state, isSearching: false, error: action.payload };
    case "SET_SELECTED_DATES":
      return {
        ...state,
        selectedDates: {
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
        },
      };

    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
  }
}
