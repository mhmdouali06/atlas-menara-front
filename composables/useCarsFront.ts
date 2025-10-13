// composables/useCarsFront.ts
import type { Car } from "~/types/car";

type HydraList<T> = {
  "hydra:member": T[];
  "hydra:totalItems"?: number;
  [k: string]: any;
};

/**
 * Frontend data-access for Cars (public site).
 * Keeps the same API ergonomics you used for travel packages.
 *
 * Example:
 *   const { getCars, getCar } = useCarsFront()
 *   const list = await getCars('page=1&itemsPerPage=12&status=published')
 *   const item = await getCar('new-mg-zs-con-conductor')
 */
export const useCarsFront = () => {
  const { $api } = useNuxtApp();

  // List with optional query: page, itemsPerPage, filters...
  const getCars = async (query?: string): Promise<HydraList<Car>> => {
    const endpoint = `/cars${query && query.trim().length ? `?${query}` : ""}`;
    return await $api(endpoint);
  };

  // Detail by slug
  const getCar = async (slug: string): Promise<Car> =>
    await $api(`/cars/slug/${encodeURIComponent(slug)}`);

  return {
    getCars,
    getCar,
  };
};
