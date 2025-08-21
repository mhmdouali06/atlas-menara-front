import type { Blog, BlogsResponse } from "~/types/Blogs";

export const useBlogsApi = () => {
  const { $api } = useNuxtApp();

  const getBlogs = async (query?: string): Promise<BlogsResponse> => {
    const endpoint = query ? `/blog_posts?${query}` : "/blog_posts";
    return await $api(endpoint);
  };
  const getBlogsCategories = async (slug: string): Promise<BlogsResponse> => {
    const endpoint =  `/blog_category/slug/${slug}`;
    return await $api(endpoint);
  };
  const getBlog = async (slug: string): Promise<Blog> =>
    await $api(`/blog_post/slug/${slug}`);

  return {
    getBlogs,
    getBlog,
    getBlogsCategories,
  };
};
