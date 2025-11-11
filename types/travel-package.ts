/**
 * Tipos neutrales para paquetes de viaje (Umrah/Hajj) — frontend
 * - Reemplaza ~/types/umrah por ~/types/travel-package
 * - Mantengo nombres en inglés para empatar con el formulario
 */

import type { Category } from "./Categories";

/* ───────────────────────── Aux ───────────────────────── */

export type PackageTypeSlug = "umrah" | "hajj" | (string & {}); // permite otros tipos futuros

// Media embebida opcional (según normalización API)
export type MediaLite = {
  id: number;
  "@id"?: string;
  filePath: string;
  alt?: string | null;
};

/* ───────────────────────── Inputs ───────────────────────── */

export type TravelPackageHotelInput = {
  name: string;
  name2?: string;
  map?: string;
};
export type TravelPackagePlanInput = {
  dayNumber?: number;
  title: string;
  description: string;
};

export type TravelPackageCreateInput = {
  title: string;
  slug: string;
  description: string;
  startsAt: string; // datetime-local
  endsAt: string; // datetime-local
  price: number;
  status: string;
  position: string;
  averageRating: number | null;
  reviewCount: number | null;
  thumbnailFile: File;
  galleryFiles: File[];
  documents: string;
  includes: string;
  habitation: string;
  accommodations: string;
  hotels: TravelPackageHotelInput[];
  plans: TravelPackagePlanInput[];

  /**
   * Tipo del paquete:
   *  - IRI del recurso de tipo: "/api/package_types/{id}"
   *  - o slug: "umrah" | "hajj" (si tu backend acepta slug directamente)
   */
  type: string;
};

/* ───────────────────────── Resource ───────────────────────── */

export type TravelPackage = {
  includesTransport: boolean;
  premiumPrice: number;
  id: number;
  "@id"?: string;
  type: string;
  title: string;
  slug: string;
  description: string;

  startsAt: string;
  endsAt: string;
  price: number;

  status?: string | null;
  createdAt?: string;
  updatedAt?: string;

  averageRating?: number | null;
  reviewCount?: number | null;
  position?: string | null;
  habitation?: string | null;

  thumbnail?: MediaLite;
  gallery: MediaLite[];

  documents?: string;
  includes?: string;
  accommodations?: string;
  category?: Category;

  // Si el backend embebe, vendrán con shape concreto; si no, pueden ser IRIs
  hotels: TravelPackageHotelInput[];
  plans: TravelPackageCreateInput[];

  /**
   * Tipo del paquete (lectura):
   *  - IRI string
   *  - objeto mínimo con slug
   */
  // type?: string | { "@id"?: string; slug: PackageTypeSlug; name?: string };
};

/* ───────────────────────── Aliases de compatibilidad (temporal) ─────────────────────────
 * Para no romper importaciones existentes mientras renuevas composables y vistas.
 * Elimínalos cuando completes la migración.
 */

export type UmrahHotelInput = TravelPackageHotelInput;
export type UmrahPlanInput = TravelPackagePlanInput;
export type UmrahCreateInput = TravelPackageCreateInput;
export type Umrah = TravelPackage;
