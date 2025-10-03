export interface MediaFile {
  "@context": string;
  "@id": string;
  "@type": string;
  filePath: string;
}

export interface Hotel {
  "@context": string;
  "@id": string;
  "@type": string;
  name: string;
  name2: string;
  map: string;
}

export interface Plan {
  "@context": string;
  "@id": string;
  "@type": string;
  dayNumber: number;
  title: string;
  description: string;
}

export interface Umrah {
  "@context": string;
  "@id": string;
  "@type": string;
  id: number;
  title: string;
  slug: string;
  description: string;
  startsAt: string; // ISO date string
  endsAt: string;   // ISO date string
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  reviewCount: number;
  position: string;
  thumbnail: MediaFile;
  gallery: MediaFile[];
  documents: string;
  includes: string;
  hotels: Hotel[];
  accommodations: string;
  plans: Plan[];
  habitation: string;
}

export interface UmrahView {
  "@id": string;
  type: string;
  first: string;
  last: string;
  previous: string;
  next: string;
}

export interface UmrahSearchMapping {
  "@type": string;
  variable: string;
  property: string;
  required: boolean;
}

export interface UmrahSearch {
  "@type": string;
  template: string;
  variableRepresentation: string;
  mapping: UmrahSearchMapping[];
}

export interface UmrahResponse {
  member: Umrah[];
  totalItems: number;
  view: UmrahView;
  search: UmrahSearch;
}
