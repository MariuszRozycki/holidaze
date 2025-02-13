import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  HeadingH1,
  GoBackButton,
  CustomSwiper,
  StarRating,
  DatePickerButton,
  DisplaySelectedDates,
  SelectGuestsNumber,
  BookVenueButton,
  DisplayPriceCalc,
} from "../../";
import { useFetchData, useRemoveVenue } from "../../../hooks";
import {
  getFullVenueName,
  getFullCityName,
  getFullCountryName,
  getMaxGuests,
  getVenueOwnerInfo,
  getVenueDescription,
} from "../../../utils";
import { useAppContext } from "../../../context/app/useAppContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CustomRemoveVenueModal } from "../../";
import "./RenderVenueById.scss";

const VenueDetails = () => {
  const { id: venueId } = useParams<{ id: string }>();
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const { isLoading, error, selectedVenue } = state;
  const datePickerButtonRef = useRef<HTMLButtonElement>(null);

  const [showRemoveVenueModal, setShowRemoveVenueModal] = useState<boolean>(false);

  const [deletingVenue, setDeletingVenue] = useState<string[]>([]);
  const removeVenue = useRemoveVenue();

  const handleDisplayClick = () => {
    datePickerButtonRef.current?.click();
  };

  useFetchData(undefined, undefined, 10, "", "", dispatch, venueId);

  const { name, avatar } = getVenueOwnerInfo(selectedVenue);

  if (!venueId) {
    return (
      <Container>
        <HeadingH1>No venueId</HeadingH1>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <HeadingH1>Loading...</HeadingH1>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <HeadingH1>Error: {error}</HeadingH1>
      </Container>
    );
  }

  if (!selectedVenue) {
    return (
      <Container>
        <HeadingH1>No venue found</HeadingH1>
      </Container>
    );
  }

  const handleRemoveVenue = async (venueId: string) => {
    setDeletingVenue((prev) => [...prev, venueId]);

    try {
      await removeVenue(venueId);
      navigate("/holidaze/venue-manager/my-venues-page");
    } catch (error) {
      console.error("Error removing venue: ", error);
    } finally {
      setDeletingVenue((prev) => prev.filter((id) => id !== venueId));
    }
  };

  const handleClick = () => {
    navigate(`/holidaze/venue-manager/update-venue-by-id/${venueId}`);
  };

  const venueManagerPath = window.location.pathname.includes(`/holidaze/venue-manager/venue-by-id/`);
  const managerPanel = (
    <div className='d-flex gap-3 justify-content-end mt-5 mb-4'>
      <Button type='button' onClick={handleClick} variant='primary'>
        Update venue
      </Button>
      <Button variant='danger' onClick={() => setShowRemoveVenueModal(true)} disabled={deletingVenue.includes(venueId)}>
        Remove venue
      </Button>

      <CustomRemoveVenueModal
        show={showRemoveVenueModal}
        onHide={() => setShowRemoveVenueModal(false)}
        onConfirm={() => {
          handleRemoveVenue(venueId);
          setShowRemoveVenueModal(false);
        }}
      />
    </div>
  );

  const iconClass: Record<keyof typeof selectedVenue.meta, string> = {
    wifi: "bi bi-wifi",
    parking: "bi bi-p-circle",
    breakfast: "bi bi-egg-fried",
    pets: "bi bi-tencent-qq",
  };

  return (
    <Card>
      <Row>
        <Col>
          <GoBackButton />
          <CustomSwiper isLoading={isLoading} isError={error} selectedVenue={selectedVenue} />
        </Col>
      </Row>
      <Row>
        <Col col={12}>
          <Card.Body>
            {venueManagerPath && managerPanel}
            <h1 className='h5 mb-2 fw-semibold'>{getFullVenueName(selectedVenue)}</h1>
            <h2 className='h5 mb-2'>
              {getFullCountryName(selectedVenue)}, {getFullCityName(selectedVenue)}
            </h2>
            <h3 className='h5'>
              <div className='owner-info mt-0'>
                <span>
                  <img src={avatar.url} alt={name} className='owner-avatar img' />
                </span>
                Host: {name}
              </div>
            </h3>
            <h3 className='h4'>
              <StarRating rating={selectedVenue.rating} />
            </h3>
          </Card.Body>
        </Col>
      </Row>
      <Row>
        <Col col={12} md={7}>
          <Card.Body>
            <h3 className='h5 fw-semibold mt-3'>Description:</h3>
            <p className='fs-5 single-venue-description'>{getVenueDescription(selectedVenue)}</p>
            <h3 className='h5 fw-semibold'>Services:</h3>
            <ul className='list-unstyled fs-5'>
              {Object.entries(selectedVenue.meta).map(([key, value]) => {
                const typedKey = key as keyof typeof iconClass;

                return (
                  <li key={key} className={`d-flex align-items-center ${value ? "yes" : "no"}`}>
                    <i className={`${iconClass[typedKey]} me-2`}></i>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value ? "Yes" : "No"}
                  </li>
                );
              })}
            </ul>
          </Card.Body>
        </Col>
        <Col col={12} md={5} className='md-text-end'>
          <Card.Body className='d-flex flex-column'>
            <h3 className='h5 fw-semibold mt-3'>Availability:</h3>
            <h2 className='fs-5'>
              <span className='me-2'>€ {selectedVenue.price}/</span>night
            </h2>
            <p className='fs-5'>
              <span>
                Max <i className='bi bi-people-fill me-2'></i> {getMaxGuests(selectedVenue)}{" "}
              </span>
            </p>
            <DisplaySelectedDates onClick={handleDisplayClick} />
            <DatePickerButton ref={datePickerButtonRef} className='data-picker-button d-md-none' />
            <SelectGuestsNumber totalGuestNumber={state.chosenTotalGuestsNumber} />
            <DisplayPriceCalc />
            <BookVenueButton />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default VenueDetails;
