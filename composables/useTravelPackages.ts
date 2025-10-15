// composables/useTravelPackagesFront.ts
import type { TravelPackage } from "~/types/travel-package";

type HydraList<T> = {
  "hydra:member": T[];
  "hydra:totalItems"?: number;
  [k: string]: any;
};

export const useTravelPackagesFront = (typeSlug: string) => {
  const { $api } = useNuxtApp();

  // Ensure "type" is always applied; let caller append more params (page, itemsPerPage, status, etc.)
  const withType = (query?: string) =>
    query && query.trim().length
      ? `type=${encodeURIComponent(typeSlug)}&${query}`
      : `type=${encodeURIComponent(typeSlug)}`;

  // List (Hydra collection). Mirrors getUmrahs(query?)
  const getPackages = async (
    query?: string
  ): Promise<HydraList<TravelPackage>> => {
    const endpoint = `/travel_packages?${withType(query)}`;
    return await $api(endpoint);
  };
  const getSlides = async (
    query?: string
  ): Promise<HydraList<TravelPackage>> => {
    const endpoint = `/travel_packages?slide=1`;
    return await $api(endpoint);
  };

  // Detail by slug. Mirrors getUmrah(slug)
  const getPackage = async (slug: string): Promise<TravelPackage> =>
    await $api(`/travel_packages/slug/${encodeURIComponent(slug)}`);

  return {
    getPackages,
    getPackage,
    getSlides,
  };
};
