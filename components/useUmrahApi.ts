import type { Umrah, UmrahResponse } from "~/types/Umrah";

export const useUmrahApi = () => {
  const { $api } = useNuxtApp();

  const getUmrahs = async (query?: string): Promise<UmrahResponse> => {
    const endpoint = query ? `/umrahs?${query}` : "/umrahs";
    return await $api(endpoint);
  };

  const getUmrah = async (slug: string): Promise<Umrah> =>
    await $api(`/umrahs/slug/${slug}`);

  return {
    getUmrahs,
    getUmrah,
  };
};
