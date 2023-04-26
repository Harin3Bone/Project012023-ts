export type ProductType = {
  data?: ProductDataType[];
  meta?: Meta;
}

export type ProductDataType = {
  id?:          number;
  name?:        string;
  desc?:        string;
  isNew?:       boolean;
  price?:       number;
  stock?:       number;
  createdAt?:   string;
  updatedAt?:   string;
  publishedAt?: string;
  slug?:        string;
  img?:         Img;
  category?:    Category;
}

export type Category = {
  id?:          number;
  title?:       string;
  desc?:        string;
  createdAt?:   string;
  updatedAt?:   string;
  publishedAt?: string;
}

export type Img = {
  id?:                number;
  name?:              string;
  alternativeText?:   null;
  caption?:           null;
  width?:             number;
  height?:            number;
  formats?:           Formats;
  hash?:              string;
  ext?:               string;
  mime?:              string;
  size?:              number;
  url?:               string;
  previewUrl?:        null;
  provider?:          string;
  provider_metadata?: ProviderMetadata;
  createdAt?:         string;
  updatedAt?:         string;
}

export type Formats = {
  small?:     Medium;
  medium?:    Medium;
  thumbnail?: Medium;
}

export type Medium = {
  ext?:               string;
  url?:               string;
  hash?:              string;
  mime?:              string;
  name?:              string;
  path?:              null;
  size?:              number;
  width?:             number;
  height?:            number;
  provider_metadata?: ProviderMetadata;
}

export type ProviderMetadata = {
  public_id?:     string;
  resource_type?: string;
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