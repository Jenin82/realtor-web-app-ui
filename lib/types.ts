export type PropertyType = "Apartment" | "Villa" | "Plot";

export type Project = {
  id: string;
  slug: string;
  title: string;
  city: string; // e.g., Kochi, Pune
  location: string; // neighborhood or address snippet
  price: number; // starting price
  bedrooms: number; // primary configuration for card display
  areaSqft?: number;
  image: string; // cover image url
  badges?: string[]; // e.g., ["New", "Premium"]
  type: PropertyType;
};
