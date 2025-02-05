import { useState } from "react";
import { CreateNewVenueRequest } from "../../types/api";
import { Container, Form, FloatingLabel, InputGroup, Alert, Button, Row, Col } from "react-bootstrap";
import { HeadingH1, CustomButton, ReactToggleButtons } from "../../components";
import { useNavigateToElement, useReactToggleButtons, useCreateNewVenue } from "../../hooks";

const RegisterNewVenue = () => {
  const locationPath = "/holidaze/venue-manager/new-venue-registered";
  const handleNavigate = useNavigateToElement({ locationPath });
  const { createNewVenue } = useCreateNewVenue();
  const { formValues, handleToggleChange } = useReactToggleButtons();

  // Początkowy stan formularza
  const [formData, setFormData] = useState<CreateNewVenueRequest>({
    name: "",
    description: "",
    media: [],
    price: 0,
    maxGuests: 0,
    meta: {
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
    },
    location: {
      address: "",
      city: "",
      zip: "",
      country: "",
      continent: "",
      lat: 0,
      lng: 0,
    },
  });

  // Stan do obsługi dynamicznej listy obrazków (renderujemy w formularzu)
  const [mediaInputs, setMediaInputs] = useState([{ url: "", alt: "" }]);

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Obsługa większości pól formularza
   * - price/maxGuests rzutujemy na number
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      // Jeśli pole to "price" lub "maxGuests", konwertujemy na liczbę:
      if (name === "price") {
        return { ...prev, price: parseFloat(value) || 0 };
      }
      if (name === "maxGuests") {
        return { ...prev, maxGuests: parseInt(value, 10) || 0 };
      }
      // Pozostałe pola – zwykła aktualizacja
      return { ...prev, [name]: value };
    });
  };

  /**
   * Obsługa dynamicznej listy obrazów (mediaInputs).
   * Uwaga: te dane przenosimy dopiero w handleSubmit do `formData.media`.
   */
  const handleMediaChange = (index: number, field: "url" | "alt", value: string) => {
    setMediaInputs((prev) => prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
  };

  const addMediaInput = () => {
    setMediaInputs((prev) => [...prev, { url: "", alt: "" }]);
  };

  const removeMediaInput = (index: number) => {
    setMediaInputs((prev) => prev.filter((_, i) => i !== index));
  };

  /**
   * Ręczna aktualizacja zagnieżdżonych pól `location`
   * (np. address, city, zip, lat itp.)
   */
  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    locationField: keyof CreateNewVenueRequest["location"]
  ) => {
    const { value } = e.target;
    // Jeśli chcemy rzutować lat/lng na number:
    if (locationField === "lat" || locationField === "lng") {
      const valueNum = parseFloat(value) || 0;
      setFormData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [locationField]: valueNum,
        },
      }));
    } else {
      // Pozostałe pola to stringi
      setFormData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [locationField]: value,
        },
      }));
    }
  };

  /**
   * Obsługa wysyłki formularza do API
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Łączymy resztę danych z wpisami dotyczącymi obrazków
      const updatedFormData: CreateNewVenueRequest = {
        ...formData,
        media: mediaInputs.filter((m) => m.url.trim() !== ""),
      };

      const createdVenue = await createNewVenue(updatedFormData);
      console.log("Created venue:", createdVenue);
      // Po udanej rejestracji przechodzimy do kolejnej strony
      handleNavigate();
    } catch (error) {
      console.error(error);
      setError("Something went wrong while creating a new venue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <HeadingH1>Register New Venue</HeadingH1>
      {error && <Alert variant='danger'>{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        {/* Nazwa obiektu */}
        <Form.Group className='mb-3' controlId='formBasicName'>
          <FloatingLabel controlId='floatingInputName' label='Name' className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Enter venue name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        {/* Opis obiektu */}
        <Form.Group className='mb-3' controlId='formBasicDescription'>
          <FloatingLabel controlId='floatingTextareaDescription' label='Venue description'>
            <Form.Control
              as='textarea'
              placeholder='Venue description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              required
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Form.Group>

        {/* -----------------------------
            Sekcja dla LOCATION
           ----------------------------- */}
        <Form.Group className='mb-3' controlId='formAddress'>
          <FloatingLabel controlId='floatingAddress' label='Address'>
            <Form.Control
              type='text'
              placeholder='Enter address'
              value={formData.location.address}
              onChange={(e) => handleLocationChange(e, "address")}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formCity'>
          <FloatingLabel controlId='floatingCity' label='City'>
            <Form.Control
              type='text'
              placeholder='Enter city'
              value={formData.location.city}
              onChange={(e) => handleLocationChange(e, "city")}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formZip'>
          <FloatingLabel controlId='floatingZip' label='Zip / Postal Code'>
            <Form.Control
              type='text'
              placeholder='Enter zip code'
              value={formData.location.zip}
              onChange={(e) => handleLocationChange(e, "zip")}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formCountry'>
          <FloatingLabel controlId='floatingCountry' label='Country'>
            <Form.Control
              type='text'
              placeholder='Enter country'
              value={formData.location.country}
              onChange={(e) => handleLocationChange(e, "country")}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formContinent'>
          <FloatingLabel controlId='floatingContinent' label='Continent'>
            <Form.Control
              type='text'
              placeholder='Enter continent'
              value={formData.location.continent}
              onChange={(e) => handleLocationChange(e, "continent")}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formLat'>
          <FloatingLabel controlId='floatingLat' label='Latitude'>
            <Form.Control
              type='number'
              placeholder='Latitude'
              value={formData.location.lat}
              onChange={(e) => handleLocationChange(e, "lat")}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formLng'>
          <FloatingLabel controlId='floatingLng' label='Longitude'>
            <Form.Control
              type='number'
              placeholder='Longitude'
              value={formData.location.lng}
              onChange={(e) => handleLocationChange(e, "lng")}
            />
          </FloatingLabel>
        </Form.Group>
        {/* -----------------------------
            Koniec sekcji LOCATION
           ----------------------------- */}

        {/* Cena za noc */}
        <Form.Group className='mb-3' controlId='formPricePerNight'>
          <InputGroup>
            <InputGroup.Text>
              <i className='bi bi-currency-euro'></i>
            </InputGroup.Text>
            <FloatingLabel controlId='floatingPricePerNight' label='Price per night'>
              <Form.Control
                type='number'
                placeholder='Enter price per night'
                name='price'
                // min='0'
                // step='0.01'
                value={formData.price}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </InputGroup>
        </Form.Group>

        {/* Maksymalna liczba gości */}
        <Form.Group className='mb-3' controlId='formMaxGuests'>
          <FloatingLabel controlId='floatingMaxGuests' label='Maximum Guests'>
            <Form.Control
              type='number'
              placeholder='Enter maximum guests'
              name='maxGuests'
              min='1'
              max='50'
              step='1'
              value={formData.maxGuests}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        {/* Sekcja dla wielu obrazków */}
        <h5>Venue Images</h5>
        {mediaInputs.map((media, index) => (
          <Row key={index} className='mb-3'>
            <Col md={5}>
              <Form.Group controlId={`mediaUrl-${index}`}>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter image URL'
                  value={media.url}
                  onChange={(e) => handleMediaChange(index, "url", e.target.value)}
                  required={index === 0} // Pierwsze pole wymagane
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group controlId={`mediaAlt-${index}`}>
                <Form.Label>Image Alt Text</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter image alt text'
                  value={media.alt}
                  onChange={(e) => handleMediaChange(index, "alt", e.target.value)}
                  required={index === 0}
                />
              </Form.Group>
            </Col>
            <Col md={2} className='d-flex align-items-end'>
              {mediaInputs.length > 1 && (
                <Button variant='danger' onClick={() => removeMediaInput(index)}>
                  Remove
                </Button>
              )}
            </Col>
          </Row>
        ))}

        <Button variant='secondary' onClick={addMediaInput} className='mb-3'>
          Add another image
        </Button>

        {/* Przykładowe toggle buttony dla ustawień meta (wifi, parking, etc.) */}
        <ReactToggleButtons formValues={formValues} handleToggleChange={handleToggleChange} />

        {/* Główny przycisk wysyłający formularz */}
        <CustomButton btnText='Register venue' variant='primary' type='submit' disabled={isSubmitting} />
      </Form>
    </Container>
  );
};

export default RegisterNewVenue;
