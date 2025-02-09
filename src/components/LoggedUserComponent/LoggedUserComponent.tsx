import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/app/useAppContext";
import { Container, Image } from "react-bootstrap";
import "./LoggedUserComponent.scss";

const LoggedUserComponent = () => {
  const { state } = useAppContext();
  const userName = state.userProfile?.name;
  const userImage = state.userProfile?.avatar.url;
  const navigate = useNavigate();
  const location = useLocation();

  const isCurrentPath = location.pathname === `/holidaze/user/logged-user-by-name/${userName}`;

  const handleNavigate = () => {
    navigate(`/holidaze/user/logged-user-by-name/${userName}`);
  };

  return (
    <Container>
      <div
        className={`user-component-wrapper ${isCurrentPath ? "inactive" : ""}`}
        onClick={isCurrentPath ? undefined : handleNavigate}
      >
        <button className='user-component-name fs-5'>
          Nice to see you <span className='fw-semibold'>{userName}</span>!
        </button>
        <Image className='logged-user-avatar' src={userImage} />
      </div>
    </Container>
  );
};

export default LoggedUserComponent;
