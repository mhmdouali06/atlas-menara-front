/**
 * Neutral car types for the frontend (mirror of travel-package types),
 * so the car forms/detail render cleanly and with autocomplete.
 */

/* ───────────── Shared ───────────── */

export type MediaLite = {
  id: number;
  "@id"?: string;
  filePath: string;
  alt?: string | null;
};

/* ───────────── Inputs (Create form) ───────────── */

export type CarCreateInput = {
  title: string;
  slug: string;
  description: string;

  brand: string;
  model: string;
  year: number | null;
  seats: number | null;
  doors: number | null;
  luggage: number | null;
  transmission: string | null; // e.g. 'automatic' | 'manual'
  fuelType: string | null; // e.g. 'gasoline' | 'diesel' | 'hybrid'
  ac: boolean;

  pricePerDay: number;
  status: string; // your CAR_STATUS_OPTIONS values
  city: string;

  averageRating: number | null;
  reviewCount: number | null;

  includes: string; // HTML from UiEditor
  documents: string; // HTML from UiEditor

  thumbnailFile: File;
  galleryFiles: File[];
};

/* ───────────── Resource (Read model) ───────────── */

export type Car = {
  id: number;
  "@id"?: string;

  title: string;
  slug: string;
  description: string;

  brand: string;
  model: string;
  year?: number | null;
  seats?: number | null;
  doors?: number | null;
  luggage?: number | null;
  transmission?: string | null;
  fuelType?: string | null;
  ac?: boolean;

  pricePerDay: number;
  status?: string | null;
  city?: string | null;

  averageRating?: number | null;
  reviewCount?: number | null;

  thumbnail?: MediaLite | null;
  gallery?: MediaLite[];

  includes?: string;
  documents?: string;

  createdAt?: string;
  updatedAt?: string;
  liked?: boolean;
};
