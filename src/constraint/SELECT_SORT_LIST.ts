type SelectSortList = {
  label: string;
  value: string;
};

export const itemsPerPageOptions:Readonly<SelectSortList[]> = [
  { label: "PerPage: 8", value: "8" },
  { label: "PerPage: 12", value: "12" },
  { label: "PerPage: 24", value: "24" },
];

export const sortOrderOptions:Readonly<SelectSortList[]> = [
  { label: "Product Name (A-Z)", value: "asc" },
  { label: "Product Name (Z-A)", value: "desc" },
  { label: "Price (Low to High)", value: "price_asc" },
  { label: "Price (High to Low)", value: "price_desc" },
];
