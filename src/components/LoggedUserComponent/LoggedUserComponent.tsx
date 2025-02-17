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

  const handleSettingsClick = () => {
    navigate("/holidaze/user/logged-user-by-name/${userName}");
  };

  const handleLogout = () => {
    navigate("/holidaze/");
  };

  return (
    <Container className={`${isCurrentPath ? "inactive" : ""}`}>
      <Dropdown className='logged-user-component' align='end'>
        <Dropdown.Toggle variant='link' className='p-0'>
          <Image className='logged-user-avatar' src={userImage} alt='User Avatar' roundedCircle />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleProfileClick}>View Profile</Dropdown.Item>
          <Dropdown.Item onClick={handleSettingsClick}>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default LoggedUserComponent;

// import { useNavigate, useLocation } from "react-router-dom";
// import { useAppContext } from "../../context/app/useAppContext";
// import { Container, Dropdown, Image } from "react-bootstrap";
// import "./LoggedUserComponent.scss";

// const LoggedUserComponent = () => {
//   const { state } = useAppContext();
//   const userName = state.userProfile?.name;
//   const formattedUserName = userName ? userName.charAt(0).toUpperCase() + userName.slice(1) : "";

//   const userImage = state.userProfile?.avatar.url;
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isCurrentPath = location.pathname === `/holidaze/user/logged-user-by-name/${userName}`;

//   const handleNavigate = () => {
//     navigate(`/holidaze/user/logged-user-by-name/${userName}`);
//   };

//   return (
//     <Container>
//       <div
//         className={`user-component-wrapper ${isCurrentPath ? "inactive" : ""}`}
//         onClick={isCurrentPath ? undefined : handleNavigate}
//       >
//         <button className='user-component-name fs-5'>
//           View your profile, <span className='fw-semibold'>{formattedUserName}</span>
//         </button>
//         <div className='logged-user-avatar-wrapper'>
//           <Image className='logged-user-avatar' src={userImage} />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default LoggedUserComponent;
