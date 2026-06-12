import type { Airport } from "./types";

export const AIRPORTS: Airport[] = [
  { code: "NAG", city: "Nagpur", name: "Dr. Babasaheb Ambedkar Intl", country: "India" },
  { code: "BLR", city: "Bengaluru", name: "Kempegowda Intl", country: "India" },
  { code: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj Intl", country: "India" },
  { code: "DEL", city: "New Delhi", name: "Indira Gandhi Intl", country: "India" },
  { code: "HYD", city: "Hyderabad", name: "Rajiv Gandhi Intl", country: "India" },
  { code: "MAA", city: "Chennai", name: "Chennai Intl", country: "India" },
  { code: "CCU", city: "Kolkata", name: "Netaji Subhas Chandra Bose Intl", country: "India" },
  { code: "PNQ", city: "Pune", name: "Pune Intl", country: "India" },
  { code: "GOI", city: "Goa", name: "Manohar Intl", country: "India" },
  { code: "DXB", city: "Dubai", name: "Dubai Intl", country: "UAE" },
  { code: "SIN", city: "Singapore", name: "Changi", country: "Singapore" },
  { code: "DOH", city: "Doha", name: "Hamad Intl", country: "Qatar" },
  { code: "AUH", city: "Abu Dhabi", name: "Zayed Intl", country: "UAE" },
  { code: "FRA", city: "Frankfurt", name: "Frankfurt am Main", country: "Germany" },
  { code: "LHR", city: "London", name: "Heathrow", country: "UK" },
];

export const findAirport = (code: string) =>
  AIRPORTS.find((a) => a.code === code) ?? AIRPORTS[0];

export const NEARBY: Record<string, string[]> = {
  NAG: ["PNQ", "HYD", "BOM"],
  BLR: ["MAA", "HYD", "GOI"],
  BOM: ["PNQ", "GOI", "NAG"],
  DEL: ["BOM", "HYD", "CCU"],
};
