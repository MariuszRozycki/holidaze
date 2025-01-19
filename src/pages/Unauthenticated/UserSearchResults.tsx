import { RenderVenueList } from "../../components";
import { useAppContext } from "../../context/app/useAppContext";

const UserSearchResults = () => {
  const { state } = useAppContext();
  const { searchQuery } = state;

  return <RenderVenueList title='Searched venues' searchQuery={searchQuery} showGoMainPage={true} />;
};

export default UserSearchResults;
