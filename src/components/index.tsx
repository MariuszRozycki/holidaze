import HeaderMainLayout from "./Header/HeaderMainLayout";
import HeaderUserLayout from "./Header/HeaderUserLayout";
import HeaderVenueManagerLayout from "./Header/HeaderVenueManagerLayout";
import CustomFooter from "./Footer/CustomFooter";
import CustomCard from "./Card/CustomCard";
import Pagination from "./Pagination/Pagination";
import SortOptions from "./SortOptions/SortOptions";
import SearchBar from "./SearchBar/SearchBar";
import RenderVenueList from "./RenderVenues/RenderVenuesList/RenderVenuesList";
import RenderVenueById from "./RenderVenues/RenderVenueById/RenderVenueById";
import LoggedUserComponent from "./LoggedUserComponent/LoggedUserComponent";
import { HeadingH1, HeadingH2, HeadingH3 } from "./Headings";
import DatePicker from "./DatePicker/DatePicker";
import CustomSwiper from "./Swiper/CustomSwiper";
import StarRating from "./StarRating/StarRating";
import Separator from "./Separator/Separator";
import DisplaySelectedDates from "./DisplaySelectedDates/DisplaySelectedDates";
import GuestsCounter from "./GuestsCounter/GuestsCounter";
import SelectGuestsNumber from "./SelectGuestsNumber/SelectGuestsNumber";
import DisplayPriceCalc from "./DisplayPriceCalc/DisplayPriceCalc";

import {
  CustomImageModal,
  CustomDatePickerModal,
  CustomUpdateProfileModal,
  CustomLoginRequiredModal,
  CustomGuestCounterModal,
  CustomDetailedBookingModal,
} from "./Modals";

import {
  RenderSignUpAs,
  RenderSignUpCustomer,
  RenderSignUpManager,
  RenderSignUpConfirmationCustomer,
  RenderSignUpConfirmationManager,
  RenderLoginAs,
  RenderLogInAsManager,
  RenderLoginAsCustomer,
} from "./RenderAuthentication";
import { RenderLoggedUserHome, RenderLoggedUserProfile } from "./RenderLoggedUser";
import { RenderMyVenues } from "./RenderLoggedVenueManager"; // Manager RenderPages
import { CustomInput } from "./FormComponents";
import {
  CustomButton,
  GoBackButton,
  SignUpButton,
  LogInButton,
  GoToMainPageButton,
  ReactToggleButtons,
  DatePickerButton,
  SearchButton,
  DatePickerFunctionalButton,
  LinkButton,
  BookVenueButton,
} from "./Buttons";

export {
  HeaderMainLayout,
  HeaderUserLayout,
  HeaderVenueManagerLayout,
  CustomFooter,
  CustomButton,
  GoBackButton,
  ReactToggleButtons,
  SignUpButton,
  LogInButton,
  GoToMainPageButton,
  HeadingH1,
  HeadingH2,
  HeadingH3,
  CustomCard,
  Pagination,
  SortOptions,
  SearchBar,
  RenderVenueList,
  RenderVenueById,
  DatePicker,
  DatePickerButton,
  CustomSwiper,
  StarRating,
  Separator,
  CustomImageModal,
  CustomDatePickerModal,
  SearchButton,
  DatePickerFunctionalButton,
  LinkButton,
  RenderSignUpAs,
  RenderSignUpCustomer,
  CustomInput,
  RenderSignUpManager,
  RenderSignUpConfirmationCustomer,
  RenderSignUpConfirmationManager,
  RenderLoginAs,
  RenderLogInAsManager,
  RenderLoginAsCustomer,
  BookVenueButton,
  CustomLoginRequiredModal,
  GuestsCounter,
  CustomGuestCounterModal,
  SelectGuestsNumber,
  DisplayPriceCalc,

  /* Logged User */
  RenderLoggedUserHome,
  RenderLoggedUserProfile,
  CustomUpdateProfileModal,
  LoggedUserComponent,
  DisplaySelectedDates,
  CustomDetailedBookingModal,

  /* Manager */
  RenderMyVenues,
};
