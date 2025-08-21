export interface BlogCategory {
  "@context": string;
  "@id": string;
  "@type": string;
  id: string;
  name: string;
}

export interface Blog {
  "@context": string;
  "@id": string;
  "@type": string;
  id: string;
  title: string;
  content: string;
  publicationDate: string;
  slug: string;
  category: BlogCategory;
  imageFile: string;
  imageName: string;
}

export interface BlogsView {
  "@id": string;
  type: string;
  first: string;
  last: string;
  previous: string;
  next: string;
}

export interface BlogsSearchMapping {
  "@type": string;
  variable: string;
  property: string;
  required: boolean;
}

export interface BlogsSearch {
  "@type": string;
  template: string;
  variableRepresentation: string;
  mapping: BlogsSearchMapping[];
}

export interface BlogsResponse {
  member: Blog[];
  totalItems: number;
  view: BlogsView;
  search: BlogsSearch;
}
