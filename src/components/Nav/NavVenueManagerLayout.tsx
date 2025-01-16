import { forwardRef, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { SearchBar } from "..";

const NavVenueManagerLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  const handleNavLinkClick = (): void => {
    handleClose();
  };

  return (
    <>
      <Navbar expand='md' className='bg-body-tertiary mb-3 position-sticky top-0 z-2' ref={headerRef}>
        <Container>
          <Navbar.Brand
            className='d-flex justify-content-start align-items-center'
            as={Link}
            to='/holidaze/venue-manager/venue-manager-home-page'
          >
            <span className='hidden-below-300 fw-semibold'>Holidaze</span>
          </Navbar.Brand>

          <Navbar.Toggle onClick={handleShow} aria-controls='offcanvasNavbar-expand-md' />
          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            id='offcanvasNavbar-expand-md'
            aria-labelledby='offcanvasNavbarLabel-expand-md'
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link as={NavLink} to='/holidaze/venue-manager/venue-manager-home-page' end onClick={handleNavLinkClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to='/holidaze/' onClick={handleNavLinkClick}>
                  Log out
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <SearchBar handleClose={handleClose} />
    </>
  );
});

NavVenueManagerLayout.displayName = "NavVenueManagerLayout";

export default NavVenueManagerLayout;
