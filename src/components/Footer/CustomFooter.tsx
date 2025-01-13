import { Container, Row, Col } from "react-bootstrap";

const CustomFooter: React.FC = () => {
  return (
    <footer className='text-center text-lg-start text-muted mt-5'>
      {/* Main footer content */}
      <section className='pt-1' style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <Container className='text-center text-md-start pt-1'>
          <Row className='mt-3'>
            {/* Contact */}
            <Col md={4} className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Kontakt</h6>

              <ul className='list-unstyled'>
                <li className='fw-bold'>Holidaze</li>
                <li className='fw-bold'>Mariusz R</li>
                <li className='fw-bold mb-2'>BestBookingPortal</li>
                <li className='fw-bold'>
                  <i className='bi bi-house-door-fill'></i> Adres:
                </li>
                <li>3314 Marigold Lane,</li>
                <li>Miami</li>
                <li>FLorida</li>
              </ul>

              <ul className='list-unstyled'>
                <li className='fw-bold'>
                  <i className='bi bi-envelope-paper-fill'></i> E-mail:
                </li>
                <li className='d-inline'>
                  <a href='mailto:tourguide@poczta.onet.pl'>tourguide@poczta.onet.pl</a>
                </li>
                <li>
                  <a href='mailto:info@tour-guide.pl'>info@tour-guide.pl</a>
                </li>
              </ul>

              <ul className='list-unstyled'>
                <li className='fw-bold'>
                  <i className='bi bi-phone-fill'></i> Telephone:
                </li>
                <li>
                  <a href='tel:305-393-8696'>305-393-8696</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer copyright */}
      <div className='text-center p-4' style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        ©2025 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/MariuszRozycki' target='_blank' rel='noopener noreferrer'>
          <span className='ms-1'>Mariusz Rozycki</span>
        </a>
      </div>
    </footer>
  );
};

export default CustomFooter;
