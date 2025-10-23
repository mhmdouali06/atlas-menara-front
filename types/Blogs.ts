export type MediaLite = {
  id: number;
  "@id"?: string;
  filePath: string;
  alt?: string | null;
};
export type BlogCategoryLite = {
  id: number;
  "@id"?: string;
  name: string;
  blog: BlogPost[];
  slug?: string;
};

export type BlogPostCreateInput = {
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  status: "draft" | "published" | string;
  publishedAt?: string | null;
  category?: string | number | null;
  authorName?: string | null;
  thumbnailFile: File;
  galleryFiles?: File[];
};

export type BlogPost = {
  id: number;
  "@id"?: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  status: string;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt?: string;
  blogCategory?: BlogCategoryLite;
  authorName?: string | null;
  thumbnail: MediaLite;
  category: BlogCategoryLite;
  gallery?: MediaLite[];
};
export interface BlogsResponse {
  member: BlogPost[];
  totalItems: number;
}
