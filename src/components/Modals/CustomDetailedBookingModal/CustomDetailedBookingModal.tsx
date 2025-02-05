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

  // const [avatarUrl, setAvatarUrl] = useState<string>(userProfile?.avatar.url || "");
  // const [avatarAlt, setAvatarAlt] = useState<string>(userProfile?.avatar.alt || "");
  // const [bannerUrl, setBannerUrl] = useState<string>(userProfile?.banner.url || "");
  // const [bannerAlt, setBannerAlt] = useState<string>(userProfile?.banner.alt || "");
  // const [bio, setBio] = useState<string>(userProfile?.bio || "");
  // const [venueManager, setVenueManager] = useState<boolean>(userProfile?.venueManager || false);

  // const [formError, setFormError] = useState<string | null>(null);
  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // useEffect(() => {
  //   if (userProfile) {
  //     setAvatarUrl(userProfile.avatar.url);
  //     setAvatarAlt(userProfile.avatar.alt);
  //     setBannerUrl(userProfile.banner.url);
  //     setBannerAlt(userProfile.banner.alt);
  //     // setBio(userProfile.bio);
  //     // setVenueManager(userProfile.venueManager);
  //   }
  // }, [userProfile]);

  // const validateForm = (): boolean => {
  //   if (!avatarUrl || !bannerUrl) {
  //     setFormError("Avatar URL and Banner URL are required.");
  //     return false;
  //   }

  //   try {
  //     new URL(avatarUrl);
  //     new URL(bannerUrl);
  //   } catch (error) {
  //     console.error(error);
  //     setFormError("Please enter valid URLs for Avatar and Banner.");
  //     return false;
  //   }

  //   setFormError(null);
  //   return true;
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   const updatedData = {
  //     avatar: {
  //       url: avatarUrl,
  //       alt: avatarAlt,
  //     },
  //     banner: {
  //       url: bannerUrl,
  //       alt: bannerAlt,
  //     },
  //     bio,
  //     // venueManager,
  //   };

  //   try {
  //     await updateProfile(updatedData);
  //     setShow(false);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <>
      <Modal show={show} onHide={onHide} className={`${className}`}>
        <Modal.Header closeButton>Reservation details</Modal.Header>

        <Modal.Body>Here goes Modal body</Modal.Body>
      </Modal>
      {/* <CustomButton btnText='' className='update-profile-button' onClick={() => setShow(true)} /> */}

      {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={fullscreen}
        aria-labelledby='custom-update-profile-modal-title'
        dialogClassName='rounded-modal-dialog custom-update-profile-modal-width'
      >
        <Modal.Header closeButton>
          <Modal.Title id='custom-update-profile-modal-title'>Update Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formError && <Alert variant='danger'>{formError}</Alert>}
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='avatarUrl'>
              <Form.Label>Avatar URL</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter new avatar URL'
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                required
                isInvalid={!!formError && !avatarUrl}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='avatarAlt'>
              <Form.Label>Avatar Alt Text</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter avatar alt text'
                value={avatarAlt}
                onChange={(e) => setAvatarAlt(e.target.value)}
                isInvalid={!!formError && !avatarAlt}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='bannerUrl'>
              <Form.Label>Banner URL</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter new banner URL'
                value={bannerUrl}
                onChange={(e) => setBannerUrl(e.target.value)}
                required
                isInvalid={!!formError && !bannerUrl}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='bannerAlt'>
              <Form.Label>Banner Alt Text</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter banner alt text'
                value={bannerAlt}
                onChange={(e) => setBannerAlt(e.target.value)}
                required
                isInvalid={!!formError && !bannerAlt}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='bio'>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Enter your bio'
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='venueManager'>
              <Form.Check
                type='checkbox'
                label='Venue Manager'
                checked={venueManager}
                onChange={(e) => setVenueManager(e.target.checked)}
              />
            </Form.Group>

            <div className='d-flex justify-content-end'>
              <Button variant='secondary' onClick={() => setShow(false)} disabled={isSubmitting}>
                Close
              </Button>
              <Button variant='primary' type='submit' className='ms-2' disabled={isSubmitting}>
                {isSubmitting ? <Spinner animation='border' size='sm' /> : "Save Changes"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default CustomDetailedBookingModal;
