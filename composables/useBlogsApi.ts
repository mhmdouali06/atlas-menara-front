export const useBlogsApi = () => {
  const { $api } = useNuxtApp();

  const getBlogs = async (query?: string): Promise<any> => {
    const endpoint = query ? `/blog_posts?${query}` : "/blog_posts";
    return await $api(endpoint);
  };
  const getBlogsCategories = async (query: string): Promise<any> => {
    const endpoint = `/blog_categories?${query}`;
    return await $api(endpoint);
  };
  const getBlogsSlugCategories = async (slug: string): Promise<any> => {
    const endpoint = `/blog_categories/${slug}`;
    return await $api(endpoint);
  };
  const getBlog = async (slug: string): Promise<any> =>
    await $api(`/blog_posts/slug/${slug}`);

  return {
    getBlogs,
    getBlog,
    getBlogsCategories,
    getBlogsSlugCategories,
  };
};
