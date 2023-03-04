export type ProductsType = {
  id:         number;
  attributes: PurpleAttributes;
}

export type PurpleAttributes = {
  name:        string;
  desc:        string;
  img:         FluffyImg;
  isNew:       boolean;
  price:       number;
  stock:       number;
  categories:  Categories;
  slug:        string;
  createdAt:   string;
  updatedAt:   string;
  publishedAt: string;
  createdBy:   CreatedBy;
  updatedBy:   CreatedBy;
}

export type Categories = {
  data: CategoriesDatum[];
}

export type CategoriesDatum = {
  id:         number;
  attributes: FluffyAttributes;
}

export type FluffyAttributes = {
  title:       string;
  desc:        string;
  img:         PurpleImg;
  products:    Products;
  createdAt:   string;
  updatedAt:   string;
  publishedAt: string;
  createdBy:   CreatedBy;
  updatedBy:   CreatedBy;
}

export type CreatedBy = {
  data: CreatedByData;
}

export type CreatedByData = {
  id:         number;
  attributes: TentacledAttributes;
}

export type TentacledAttributes = {
}

export type PurpleImg = {
  data: ImgData[];
}

export type ImgData = {
  id:         number;
  attributes: StickyAttributes;
}

export type StickyAttributes = {
  name:              string;
  alternativeText:   string;
  caption:           string;
  width:             number;
  height:            number;
  formats:           string;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        string;
  provider:          string;
  provider_metadata: string;
  related:           Related;
  folder:            Folder;
  folderPath:        string;
  createdAt:         string;
  updatedAt:         string;
  createdBy:         CreatedBy;
  updatedBy:         CreatedBy;
}

export type Folder = {
  data: FolderData;
}

export type FolderData = {
  id:         number;
  attributes: IndigoAttributes;
}

export type IndigoAttributes = {
  name:      string;
  pathId:    number;
  parent:    CreatedBy;
  children:  Related;
  files:     Files;
  path:      string;
  createdAt: string;
  updatedAt: string;
  createdBy: CreatedBy;
  updatedBy: CreatedBy;
}

export type Related = {
  data: CreatedByData[];
}

export type Files = {
  data: FilesDatum[];
}

export type FilesDatum = {
  id:         number;
  attributes: IndecentAttributes;
}

export type IndecentAttributes = {
  name:              string;
  alternativeText:   string;
  caption:           string;
  width:             number;
  height:            number;
  formats:           string;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        string;
  provider:          string;
  provider_metadata: string;
  related:           Related;
  folder:            CreatedBy;
  folderPath:        string;
  createdAt:         string;
  updatedAt:         string;
  createdBy:         PurpleCreatedBy;
  updatedBy:         CreatedBy;
}

export type PurpleCreatedBy = {
  data: CreatedByDataClass;
}

export type CreatedByDataClass = {
  id:         number;
  attributes: HilariousAttributes;
}

export type HilariousAttributes = {
  firstname:          string;
  lastname:           string;
  username:           string;
  email:              string;
  resetPasswordToken: string;
  registrationToken:  string;
  isActive:           boolean;
  roles:              Roles;
  blocked:            boolean;
  preferedLanguage:   string;
  createdAt:          string;
  updatedAt:          string;
  createdBy:          CreatedBy;
  updatedBy:          CreatedBy;
}

export type Roles = {
  data: RolesDatum[];
}

export type RolesDatum = {
  id:         number;
  attributes: AmbitiousAttributes;
}

export type AmbitiousAttributes = {
  name:        string;
  code:        string;
  description: string;
  users:       Related;
  permissions: Permissions;
  createdAt:   string;
  updatedAt:   string;
  createdBy:   CreatedBy;
  updatedBy:   CreatedBy;
}

export type Permissions = {
  data: PermissionsDatum[];
}

export type PermissionsDatum = {
  id:         number;
  attributes: CunningAttributes;
}

export type CunningAttributes = {
  action:     string;
  subject:    string;
  properties: string;
  conditions: string;
  role:       CreatedBy;
  createdAt:  string;
  updatedAt:  string;
  createdBy:  CreatedBy;
  updatedBy:  CreatedBy;
}

export type Products = {
  data: ProductsDatum[];
}

export type ProductsDatum = {
  id:         number;
  attributes: MagentaAttributes;
}

export type MagentaAttributes = {
  name:        string;
  desc:        string;
  img:         FluffyImg;
  isNew:       boolean;
  price:       number;
  stock:       number;
  categories:  Related;
  slug:        string;
  createdAt:   string;
  updatedAt:   string;
  publishedAt: string;
  createdBy:   PurpleCreatedBy;
  updatedBy:   CreatedBy;
}

export type FluffyImg = {
  data: ImgData;
}

export type Meta = {
  pagination: Pagination;
}

export type Pagination = {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}