import { Venue, Meta, Profile } from "../types/api";

export type Action =
  /* VENUES */
  | { type: "FETCH_VENUES_START" }
  | { type: "FETCH_VENUES_SUCCESS"; payload: { data: Venue[]; meta: Meta } }
  | { type: "FETCH_VENUES_ERROR"; payload: string }
  | { type: "REMOVE_VENUES" }
  /* PAGINATION/SORT/SORT_ORDER */
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_SORT"; payload: string }
  | { type: "SET_SORT_ORDER"; payload: string }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  /* SEARCH_VENUES */
  | { type: "SEARCH_VENUES_START" }
  | { type: "SEARCH_VENUES_SUCCESS"; payload: Venue[] }
  | { type: "SEARCH_VENUES_ERROR"; payload: string }
  /* FETCH_VENUE_DETAILS/SELECTED_DATES */
  | { type: "FETCH_VENUE_DETAILS_START" }
  | { type: "FETCH_VENUE_DETAILS_SUCCESS"; payload: Venue }
  | { type: "FETCH_VENUE_DETAILS_ERROR"; payload: string }
  | { type: "SET_SELECTED_DATES"; payload: { startDate: Date; endDate: Date } }
  /* ACCESS_TOKEN */
  | { type: "SET_ACCESS_TOKEN"; payload: string }
  | { type: "REMOVE_ACCESS_TOKEN" }
  /* USER_DATA */
  | { type: "SET_USER_DATA"; payload: { name: string; email: string } }
  | { type: "REMOVE_USER_DATA" }
  /* FETCH_USER_PROFILE */
  | { type: "FETCH_USER_PROFILE_START" }
  | { type: "SET_USER_PROFILE_SUCCESS"; payload: Profile }
  | { type: "FETCH_USER_PROFILE_ERROR"; payload: string }
  | { type: "REMOVE_USER_PROFILE" }
  /* UPDATE_USER_PROFILE */
  | { type: "UPDATE_USER_PROFILE_START" }
  | { type: "UPDATE_USER_PROFILE_SUCCESS"; payload: Profile }
  | { type: "UPDATE_USER_PROFILE_ERROR"; payload: string }
  /* CHOSEN_TOTAL_GUESTS_NUMBER */
  | { type: "CHOSEN_TOTAL_GUESTS_NUMBER"; payload: number }
  /* CLEAR_STATE */
  | { type: "CLEAR_STATE" };

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
  accessToken: null | string;
  userData: { name: string; email: string } | null;
  userProfile: Profile | null;
  chosenTotalGuestsNumber?: number;
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
  accessToken: null,
  userData: null,
  userProfile: null,
  chosenTotalGuestsNumber: 0,
};

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "FETCH_VENUES_START":
      return { ...state, isLoading: true, error: null };

    /* VENUES */
    case "FETCH_VENUES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        venues: action.payload.data,
        meta: action.payload.meta,
      };

    case "FETCH_VENUES_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    /* PAGINATION/SORT/SORT_ORDER */
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_SORT":
      return { ...state, sort: action.payload };

    case "SET_SORT_ORDER":
      return { ...state, sortOrder: action.payload };

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };

    /* SEARCH_VENUES */
    case "SEARCH_VENUES_START":
      return { ...state, isSearching: true, error: null };

    case "SEARCH_VENUES_SUCCESS":
      return { ...state, isSearching: false, venues: action.payload };

    case "SEARCH_VENUES_ERROR":
      return { ...state, isSearching: false, error: action.payload };

    /* FETCH_VENUE_DETAILS/SELECTED_DATES */
    case "FETCH_VENUE_DETAILS_START":
      return { ...state, isLoading: true, error: null };

    case "FETCH_VENUE_DETAILS_SUCCESS":
      return { ...state, isLoading: false, selectedVenue: action.payload };

    case "FETCH_VENUE_DETAILS_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    case "REMOVE_VENUES":
      return { ...state, userData: null };

    case "SET_SELECTED_DATES":
      return {
        ...state,
        selectedDates: {
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
        },
      };

    /* ACCESS_TOKEN */
    case "SET_ACCESS_TOKEN":
      return { ...state, accessToken: action.payload };

    case "REMOVE_ACCESS_TOKEN":
      return { ...state, accessToken: null };

    /* USER_DATA */
    case "SET_USER_DATA":
      return { ...state, userData: action.payload };

    case "REMOVE_USER_DATA":
      return { ...state, userData: null };

    /* FETCH_USER_PROFILE */
    case "FETCH_USER_PROFILE_START":
      return { ...state, isLoading: true, error: null };

    case "SET_USER_PROFILE_SUCCESS":
      return { ...state, isLoading: false, userProfile: action.payload, error: null };

    case "FETCH_USER_PROFILE_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    case "REMOVE_USER_PROFILE":
      return { ...state, userProfile: null };

    /* UPDATE_USER_PROFILE */
    case "UPDATE_USER_PROFILE_START":
      return { ...state, isLoading: true };

    case "UPDATE_USER_PROFILE_SUCCESS":
      return { ...state, isLoading: false, userProfile: action.payload };

    case "UPDATE_USER_PROFILE_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    /* CHOSEN_TOTAL_GUESTS_NUMBER */
    case "CHOSEN_TOTAL_GUESTS_NUMBER":
      return {
        ...state,
        chosenTotalGuestsNumber: action.payload,
      };

    case "CLEAR_STATE":
      return { ...initialState };

    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
  }
}
