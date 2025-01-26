import UnauthenticatedHomePage from "./Unauthenticated/UnauthenticatedHomePage";
import LoginAs from "./Unauthenticated/LoginAs";
import LoginAsUser from "./Unauthenticated/LoginAsUser";
import LoginAsManager from "./Unauthenticated/LoginAsManager";
import SignUpPage from "./Unauthenticated/SignUpPage";
import SignUpAsCustomerPage from "./Unauthenticated/SignUpAsCustomerPage";
import SignUpCustomerRegConfirm from "./Unauthenticated/SignUpCustomerRegConfirm";
import SignUpAsManagerPage from "./Unauthenticated/SignUpAsManagerPage";
import SignUpManagerRegConfirm from "./Unauthenticated/SignUpManagerRegConfirm";
import About from "./Unauthenticated/About";
import Contact from "./Unauthenticated/Contact";
import PageNotExists from "./PageNotExists/PageNotExists";
import UserSearchResults from "./Unauthenticated/UserSearchResults";
import VenueByIdPage from "./Unauthenticated/VenueByIdPage";

/* Logged User */
import LoggedUserHomePage from "./LoggedUser/LoggedUserHomePage";

/* Venue manager */
import VenueManagerAdminPanel from "./VenueManager/VenueManagerAdminPanel";
import RegisterNewVenue from "./VenueManager/RegisterNewVenue";
import NewVenueRegistered from "./VenueManager/NewVenueRegistered";
import MyVenues from "./VenueManager/MyVenues";
import MyVenuesBookings from "./VenueManager/MyVenuesBookings";

export {
  UnauthenticatedHomePage,
  LoginAs,
  LoginAsUser,
  LoginAsManager,
  SignUpPage,
  About,
  Contact,
  SignUpAsCustomerPage,
  SignUpCustomerRegConfirm,
  SignUpAsManagerPage,
  SignUpManagerRegConfirm,
  PageNotExists,
  UserSearchResults,
  VenueByIdPage,

  /* Logged User */
  LoggedUserHomePage,

  /* Venue manager */
  VenueManagerAdminPanel,
  RegisterNewVenue,
  NewVenueRegistered,
  MyVenues,
  MyVenuesBookings,
};
