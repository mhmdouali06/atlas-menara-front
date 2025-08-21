export interface Category {
  "@id": string;
  "@type": string;
  "@context": string;
  id: string;
  name: string;
  slug: string;
  blogPosts: string[];
}

export interface View {
  "@id": string;
  type: string;
  first: string;
  last: string;
  previous: string;
  next: string;
}

export interface SearchMapping {
  "@type": string;
  variable: string;
  property: string;
  required: boolean;
}

export interface Search {
  "@type": string;
  template: string;
  variableRepresentation: string;
  mapping: SearchMapping[];
}

export interface CategoriesResponse {
  member: Category[];
  totalItems: number;
  view: View;
  search: Search;
}
