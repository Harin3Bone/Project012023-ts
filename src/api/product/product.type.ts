export type ProductsType = {
  data?: Required<Datum[]>;
  meta?: Meta;
}

export type Datum = {
  id?:          number;
  name?:        string;
  desc?:        string;
  isNew?:       boolean;
  price?:       number;
  stock?:       number;
  createdAt?:   string;
  updatedAt?:   string;
  publishedAt?: string;
  slug?:        null;
  img?:         Img;
  categories?:  Category[];
}

export type Category = {
  id?:          number;
  title?:       Desc;
  desc?:        Desc;
  createdAt?:   string;
  updatedAt?:   string;
  publishedAt?: string;
}

export enum Desc {
  BluetoothSpeakers = "Bluetooth speakers",
  DescHeadPhones = "Head Phones",
  HeadPhones = "Head phones",
  SmartWatches = "Smart watches",
  WirelessEarbuds = "Wireless earbuds",
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
  ext?:               EXT;
  mime?:              MIME;
  size?:              number;
  url?:               string;
  previewUrl?:        null;
  provider?:          Provider;
  provider_metadata?: ProviderMetadata;
  createdAt?:         string;
  updatedAt?:         string;
}

export enum EXT {
  PNG = ".png",
  Webp = ".webp",
}

export type Formats = {
  small?:     Large;
  thumbnail?: Large;
  large?:     Large;
  medium?:    Large;
}

export type Large = {
  ext?:               EXT;
  url?:               string;
  hash?:              string;
  mime?:              MIME;
  name?:              string;
  path?:              null;
  size?:              number;
  width?:             number;
  height?:            number;
  provider_metadata?: ProviderMetadata;
}

export enum MIME {
  ImagePNG = "image/png",
  ImageWebp = "image/webp",
}

export type ProviderMetadata = {
  public_id?:     string;
  resource_type?: ResourceType;
}

export enum ResourceType {
  Image = "image",
}

export enum Provider {
  Cloudinary = "cloudinary",
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