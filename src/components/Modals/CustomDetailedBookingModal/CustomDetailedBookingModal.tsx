import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { CustomButton } from "../../";
import { useGetUserBookingById } from "../../../hooks";
import { useAppContext } from "../../../context/app/useAppContext";
import "./CustomDetailedBookingModal.scss";

type CustomDetailedBookingModalProps = {
  fullscreen?: true | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down";
  show: boolean;
  elementBookingId: string | undefined;
  onHide: () => void;
  className?: string;
};

const CustomDetailedBookingModal: React.FC<CustomDetailedBookingModalProps> = ({
  fullscreen,
  show,
  onHide,
  className,
  elementBookingId,
}) => {
  const { state } = useAppContext();
  const { userProfile, isLoading, error } = state;

  const { bookingById } = useGetUserBookingById(elementBookingId);

  return (
    <>
      <Modal show={show} onHide={onHide} className={`${className}`}>
        <Modal.Header closeButton>Reservation details</Modal.Header>

        <Modal.Body>Here goes Modal body</Modal.Body>
      </Modal>
    </>
  );
};

export default CustomDetailedBookingModal;
