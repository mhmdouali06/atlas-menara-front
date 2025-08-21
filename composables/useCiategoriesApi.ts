import type { CategoriesResponse } from "~/types/Categories";

export const useCategoriesApi = () => {
  const { $api } = useNuxtApp();

  const getCategories = async (query?: string): Promise<CategoriesResponse> => {
    const endpoint = query ? `/categories?${query}` : "/categories";
    return await $api(endpoint);
  };
  const getCategory = async (id: string) => await $api(`/categories/${id}`);

  return {
    getCategories,
    getCategory,
  };
};
