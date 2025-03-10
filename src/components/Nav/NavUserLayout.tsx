import { forwardRef, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CustomLogOutModal } from "../Modals";
import { clearLocalStorageOnLogout } from "../../utils";
import { useAppContext } from "../../context/app/useAppContext";
import "./NavLayout.scss";

const NavUserLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  const { dispatch } = useAppContext();
  const [show, setShow] = useState<boolean>(false);
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  const handleNavLinkClick = (): void => {
    handleClose();
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    clearLocalStorageOnLogout();
    dispatch({ type: "CLEAR_STATE" });
    navigate("/holidaze/");
  };

  return (
    <>
      <Navbar expand={false} ref={headerRef}>
        <Container className='nav-custom-container'>
          <Navbar.Brand
            className='d-flex justify-content-start align-items-center'
            as={Link}
            to='/holidaze/user/logged-user-home-page/'
          >
            <span className='hidden-below-300 fs-3 text-light'>HOLIDAZE</span>
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} aria-controls='offcanvasNavbar-expand-md'>
            <span className='custom-toggler-icon'>
              <i className='bi bi-list'></i>
            </span>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            scroll
            id='offcanvasNavbar-expand-md'
            aria-labelledby='offcanvasNavbarLabel-expand-md'
            placement='end'
          >
            <Offcanvas.Header>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>HOLIDAZE</Offcanvas.Title>
              <button onClick={handleClose} type='button' className='custom-btn-close' aria-label='Close'>
                <i className='bi bi-x-lg'></i>
              </button>
            </Offcanvas.Header>
            <Offcanvas.Body className='custom-offcanvas-body'>
              <Nav className='justify-content-end flex-grow-1 pe-3 fs-5'>
                <Nav.Link as={NavLink} to='/holidaze/user/logged-user-home-page' end onClick={handleNavLinkClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to='/holidaze/user/about' onClick={handleNavLinkClick}>
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to='/holidaze/user/contact' onClick={handleNavLinkClick}>
                  Contact
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to='/holidaze/'
                  onClick={(e) => {
                    e.preventDefault();
                    setShowLogoutModal(true);
                  }}
                  end
                >
                  Log out
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <CustomLogOutModal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} onConfirm={handleLogout} />
        </Container>
      </Navbar>
    </>
  );
});

NavUserLayout.displayName = "NavUserLayout";

export default NavUserLayout;
