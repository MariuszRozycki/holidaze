export type ApiError = {
  path: string[];
  message: string;
  code?: string;
};

export type ApiErrorResponse = {
  errors: ApiError[];
  status: string;
  statusCode: number;
};

export type CreateNewVenueRequest = {
  name: string;
  description: string;
  media: Media[];
  price: number;
  maxGuests: number;
  meta: {
    wifi?: boolean;
    parking?: boolean;
    breakfast?: boolean;
    pets?: boolean;
  };
  location: {
    address?: string;
    city?: string;
    zip?: string;
    country?: string;
    continent?: string;
    lat?: number;
    lng?: number;
  };
};

export type CreateBookingRequest = {
  dateFrom: string;
  dateTo: string;
  guests: number;
  venueId: string;
};

export type BookingResponse = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  venue: {
    id: string;
    name: string;
    description: string;
  };
  price: number;
};

export type Location = {
  address: string;
  city: string;
  continent: string;
  country: string;
  lat: number;
  lng: number;
  zip: string;
};

export type Media = {
  url: string;
  alt: string;
};

export type MetaDetails = {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
};

export type VenueBookingsDetails = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  customer: {
    name: string;
    email: string;
    bio: string;
    avatar: Media;
    banner: Media;
  };
};

export type OwnerDetails = {
  name: string;
  email: string;
  bio: string;
  avatar: Media;
  banner: Media;
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
  bookings: VenueBookingsDetails[];
  owner: OwnerDetails;
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

export type Profile = {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
  bookings: Booking[];
  venues: Venue[];
};
