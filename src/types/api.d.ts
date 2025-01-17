export type Location = {
  address: string;
  city: string;
  continent: string | null;
  country: string;
  lat: number | null;
  lng: number | null;
  zip: string | null;
};

export type Media = {
  url: string;
};

export type MetaDetails = {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
};

export type Venue = {
  id: string;
  name: string;
  description: string;
  created: string;
  updated: string;
  location: Location; // Obiekt typu Location
  maxGuests: number;
  media: Media[]; // Tablica obiektów Media
  meta: MetaDetails; // Obiekt typu MetaDetails
  price: number;
  rating: number;
  _count: {
    bookings: number;
  };
};

export type Meta = {
  isFirstPage: boolean; // Czy to pierwsza strona
  isLastPage: boolean; // Czy to ostatnia strona
  currentPage: number; // Numer bieżącej strony
  previousPage: number | null; // Numer poprzedniej strony lub null
  nextPage: number | null; // Numer następnej strony lub null
  pageCount: number; // Liczba wszystkich stron
  totalCount: number; // Całkowita liczba elementów
};

export type VenueResponse = {
  data: Venue[];
  meta: Meta;
};
