import { useAppContext } from "../../context/app/useAppContext";
import { Container, Image } from "react-bootstrap";
import "./LoggedUserComponent.scss";

const LoggedUserComponent = () => {
  const { state } = useAppContext();
  const userName = state.userProfile?.name;
  const userImage = state.userProfile?.avatar.url;

  return (
    <Container>
      <div className='user-component-wrapper'>
        <p className='user-component-name fs-5'>
          Nice to see you <span className='fw-semibold'>{userName}</span>!
        </p>
        <Image className='logged-user-avatar' src={userImage} />
      </div>
    </Container>
  );
};

export default LoggedUserComponent;
