import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/app/useAppContext";
import { Dropdown, Image, Container } from "react-bootstrap";
import "./LoggedUserComponent.scss";

const LoggedUserComponent = () => {
  const { state } = useAppContext();
  const userName = state.userProfile?.name;
  const formattedUserName = userName ? userName.charAt(0).toUpperCase() + userName.slice(1) : "";

  const userImage = state.userProfile?.avatar.url;
  const navigate = useNavigate();
  const location = useLocation();

  const isCurrentPath = location.pathname === `/holidaze/user/logged-user-by-name/${userName}`;

  const handleProfileClick = () => {
    navigate(`/holidaze/user/logged-user-by-name/${userName}`);
  };

  const handleLogout = () => {
    navigate("/holidaze/");
  };

  return (
    <Container className={`mb-4 ${isCurrentPath ? "inactive" : ""}`}>
      <div className='logged-user-component'>
        <span className='greeting-text'>Hi, {formattedUserName}!</span>
        <Dropdown align='end'>
          <Dropdown.Toggle variant='link' className='p-0'>
            <Image className='logged-user-avatar' src={userImage} alt='User Avatar' roundedCircle />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleProfileClick}>View Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
};

export default LoggedUserComponent;
