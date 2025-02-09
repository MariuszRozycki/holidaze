import UnauthenticatedHomePage from "./Unauthenticated/UnauthenticatedHomePage";
import LoginAsPage from "./Unauthenticated/LoginAsPage";
import LoginAsCustomerPage from "./Unauthenticated/LoginAsCustomerPage";
import LoginAsManagerPage from "./Unauthenticated/LoginAsManagerPage";
import SignUpPage from "./Unauthenticated/SignUpPage";
import SignUpAsCustomerPage from "./Unauthenticated/SignUpAsCustomerPage";
import SignUpCustomerRegConfirmPage from "./Unauthenticated/SignUpCustomerRegConfirmPage";
import SignUpAsManagerPage from "./Unauthenticated/SignUpAsManagerPage";
import SignUpManagerRegConfirmPage from "./Unauthenticated/SignUpManagerRegConfirmPage";
import About from "./Unauthenticated/About";
import Contact from "./Unauthenticated/Contact";
import PageNotExists from "./PageNotExists/PageNotExists";
import UserSearchResults from "./Unauthenticated/UserSearchResults";
import VenueByIdPage from "./Unauthenticated/VenueByIdPage";
import LoggedUserProfilePage from "./LoggedUser/LoggedUserProfilePage";

/* Logged User */
import LoggedUserHomePage from "./LoggedUser/LoggedUserHomePage";

/* Venue manager */
import VenueManagerAdminPanel from "./VenueManager/VenueManagerAdminPanel";
import RegisterNewVenuePage from "./VenueManager/RegisterNewVenuePage";
import NewVenueRegistered from "./VenueManager/NewVenueRegistered";
import MyVenuesPage from "./VenueManager/MyVenuesPage";
import MyVenuesBookings from "./VenueManager/MyVenuesBookings";
import UpdateVenueDataPage from "./VenueManager/UpdateVenueDataPage";

export {
  UnauthenticatedHomePage,
  LoginAsPage,
  LoginAsCustomerPage,
  LoginAsManagerPage,
  SignUpPage,
  About,
  Contact,
  SignUpAsCustomerPage,
  SignUpCustomerRegConfirmPage,
  SignUpAsManagerPage,
  SignUpManagerRegConfirmPage,
  PageNotExists,
  UserSearchResults,
  VenueByIdPage,

  /* Logged User */
  LoggedUserProfilePage,
  LoggedUserHomePage,

  /* Venue manager */
  VenueManagerAdminPanel,
  RegisterNewVenuePage,
  NewVenueRegistered,
  MyVenuesPage,
  MyVenuesBookings,
  UpdateVenueDataPage,
};
