import type { Project, PropertyType } from "./types";

export const CITIES = ["Kochi", "Pune", "Bengaluru", "Goa"] as const;
export type City = typeof CITIES[number];

export const PROPERTY_TYPES: PropertyType[] = ["Apartment", "Villa", "Plot"];

export const POPULAR_BY_CITY: Record<City, Project[]> = {
  Kochi: [
    {
      id: "ko-1",
      slug: "kochi-skyline-apartments",
      title: "Skyline Apartments",
      city: "Kochi",
      location: "Kakkanad",
      price: 5200000,
      bedrooms: 2,
      areaSqft: 980,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      badges: ["New"],
      type: "Apartment",
    },
    {
      id: "ko-2",
      slug: "kochi-marina-residences",
      title: "Marina Residences",
      city: "Kochi",
      location: "Marine Drive",
      price: 8900000,
      bedrooms: 3,
      areaSqft: 1450,
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
      badges: ["Premium"],
      type: "Apartment",
    },
    {
      id: "ko-3",
      slug: "kochi-greens-villas",
      title: "Greens Villas",
      city: "Kochi",
      location: "Edappally",
      price: 12500000,
      bedrooms: 4,
      areaSqft: 2100,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
      badges: ["Gated"],
      type: "Villa",
    },
  ],
  Pune: [
    {
      id: "pu-1",
      slug: "pune-hillcrest",
      title: "Hillcrest Homes",
      city: "Pune",
      location: "Baner",
      price: 7400000,
      bedrooms: 2,
      areaSqft: 1050,
      image:
        "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1200&auto=format&fit=crop",
      badges: ["Offer"],
      type: "Apartment",
    },
    {
      id: "pu-2",
      slug: "pune-lavish-villas",
      title: "Lavish Villas",
      city: "Pune",
      location: "Hinjawadi",
      price: 18200000,
      bedrooms: 4,
      areaSqft: 2400,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      badges: ["Luxury"],
      type: "Villa",
    },
    {
      id: "pu-3",
      slug: "pune-urban-plots",
      title: "Urban Plots",
      city: "Pune",
      location: "Wagholi",
      price: 4200000,
      bedrooms: 0,
      image:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1200&auto=format&fit=crop",
      badges: ["Investment"],
      type: "Plot",
    },
  ],
  Bengaluru: [],
  Goa: [],
};

export function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}
