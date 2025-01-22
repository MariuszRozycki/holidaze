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
  location: Location;
  maxGuests: number;
  media: Media[];
  meta: MetaDetails;
  price: number;
  rating: number;
  _count: {
    bookings: number;
  };
};

export type Meta = {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
};

export type VenueResponse = {
  data: Venue[];
  meta: Meta;
};
