import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateNewVenueRequest, ApiError, ApiErrorResponse } from "../../../types/api";
import { useFetchManagerVenues, useUpdateVenue } from "../../../hooks";
import { useAppContext } from "../../../context/app/useAppContext";
import { newVenueFormValidation, hasErrors } from "../../../utils";
import { Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  HeadingH1,
  CustomButton,
  ReactToggleButtons,
  LocationFormSection,
  MediaFormSection,
  VenueNameField,
  VenueDescriptionField,
  PricePerNightField,
  MaximumGuestsField,
} from "../../../components";
import "../RenderRegister&UpdateVenue.scss";

const RenderUpdateVenueData = () => {
  const { id } = useParams<{ id: string }>();
  const venueId = id!;
  const { state, dispatch } = useAppContext();
  const { userProfile, selectedVenue } = state;
  const managerName = userProfile?.name;
  useFetchManagerVenues(undefined, undefined, undefined, undefined, undefined, dispatch, venueId, managerName);
  console.log(selectedVenue);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState<CreateNewVenueRequest>({
    name: "",
    description: "",
    media: [{ url: "", alt: "" }],
    price: 0,
    maxGuests: 0,
    meta: { wifi: false, parking: false, breakfast: false, pets: false },
    location: { address: "", city: "", zip: "", country: "", continent: "", lat: 0, lng: 0 },
  });

  const { updateVenue } = useUpdateVenue(venueId);

  useEffect(() => {
    if (state.selectedVenue && venueId) {
      const venue = state.selectedVenue;
      console.log(venue);

      setFormData({
        name: venue.name || "",
        description: venue.description || "",
        media: venue.media?.length ? venue.media : [{ url: "", alt: "" }],
        price: venue.price || 0,
        maxGuests: venue.maxGuests || 0,
        meta: venue.meta || { wifi: false, parking: false, breakfast: false, pets: false },
        location: venue.location || { address: "", city: "", zip: "", country: "", continent: "", lat: 0, lng: 0 },
      });

      setIsLoading(false);
    }
  }, [state.selectedVenue, venueId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = newVenueFormValidation(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const updatedFormData = {
        ...formData,
        media: formData.media.filter((m) => m.url.trim() !== ""),
      };

      const response = await updateVenue(updatedFormData);

      if ("errors" in response) {
        const apiErrors = (response as ApiErrorResponse).errors.map((error: ApiError) => ({
          path: error.path,
          message: error.message,
        }));

        const updatedErrors = newVenueFormValidation(formData, apiErrors);
        setErrors(updatedErrors);

        apiErrors
          .filter((err) => !(err.path.join(".") in updatedErrors))
          .forEach((err) =>
            toast.error(err.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          );

        setIsSubmitting(false);
        return;
      }

      toast.success("Venue updated successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setErrors({});
    } catch (error) {
      console.error("Error updating venue:", error);
      setError("Something went wrong while updating the venue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <Container>
        <HeadingH1>Loading venue data...</HeadingH1>
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

  if (isLoading) {
    return (
      <Container>
        <HeadingH1>Loading venue data...</HeadingH1>
      </Container>
    );
  }

  if (!state.selectedVenue) {
    return (
      <Container>
        <HeadingH1>Error: Venue not found</HeadingH1>
      </Container>
    );
  }

  return (
    <Container>
      <div className='page-element-wrapper'>
        <HeadingH1>Update Venue</HeadingH1>
        <Form className='content-page-wrapper update-venue' onSubmit={handleSubmit}>
          <VenueNameField formData={formData} setFormData={setFormData} errors={errors} />
          <VenueDescriptionField formData={formData} setFormData={setFormData} errors={errors} />
          <LocationFormSection formData={formData} setFormData={setFormData} />
          <PricePerNightField formData={formData} setFormData={setFormData} errors={errors} />
          <MaximumGuestsField formData={formData} setFormData={setFormData} errors={errors} />
          <MediaFormSection errors={errors} formData={formData} setFormData={setFormData} />
          <ReactToggleButtons meta={formData.meta} setMeta={(meta) => setFormData((prev) => ({ ...prev, meta }))} />
          <CustomButton btnText='Update venue' className='update-venue-button' type='submit' disabled={isSubmitting} />
        </Form>
      </div>
    </Container>
  );
};

export default RenderUpdateVenueData;
