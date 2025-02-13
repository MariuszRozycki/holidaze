import { forwardRef, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./NavLayout.scss";

const NavMainLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  const handleNavLinkClick = (): void => {
    handleClose();
  };

  return (
    <>
      <Navbar expand='md' ref={headerRef}>
        <Container className='nav-custom-container'>
          <Navbar.Brand className='d-flex justify-content-start align-items-center' as={Link} to='/holidaze/'>
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
              <Nav className='justify-content-end flex-grow-1 fs-5'>
                <Nav.Link as={NavLink} to='/holidaze/' end onClick={handleNavLinkClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to='login-as-page' onClick={handleNavLinkClick}>
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to='sign-up-page' onClick={handleNavLinkClick}>
                  Sign up
                </Nav.Link>
                <Nav.Link as={NavLink} to='about' onClick={handleNavLinkClick}>
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to='contact' onClick={handleNavLinkClick}>
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
});

NavMainLayout.displayName = "NavMainLayout";

export default NavMainLayout;
