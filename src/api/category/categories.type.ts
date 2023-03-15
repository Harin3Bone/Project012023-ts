export type CategoriesType = {
  data?: Required<CategoriesDataType[]>;
  meta?: Meta;
}

export type CategoriesDataType = {
  id?:          number;
  title?:       string;
  desc?:        string;
  createdAt?:   string;
  updatedAt?:   string;
  publishedAt?: string;
}

export type Meta = {
  pagination?: Pagination;
}

export type Pagination = {
  page?:      number;
  pageSize?:  number;
  pageCount?: number;
  total?:     number;
}