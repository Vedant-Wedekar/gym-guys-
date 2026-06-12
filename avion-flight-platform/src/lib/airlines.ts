export interface AirlineMeta {
  code: string;
  name: string;
  hue: string;
  rating: number;
  intl?: boolean;
}

export const AIRLINES: AirlineMeta[] = [
  { code: "6E", name: "IndiGo", hue: "#173F8F", rating: 4.3 },
  { code: "AI", name: "Air India", hue: "#C0322B", rating: 4.1 },
  { code: "QP", name: "Akasa Air", hue: "#F26A2A", rating: 4.4 },
  { code: "SG", name: "SpiceJet", hue: "#B5121B", rating: 3.8 },
  { code: "UK", name: "Vistara", hue: "#492A6B", rating: 4.6 },
  { code: "EK", name: "Emirates", hue: "#C8102E", rating: 4.8, intl: true },
  { code: "QR", name: "Qatar Airways", hue: "#5C0632", rating: 4.9, intl: true },
  { code: "SQ", name: "Singapore Airlines", hue: "#0E2A66", rating: 4.9, intl: true },
  { code: "EY", name: "Etihad Airways", hue: "#9A7B2D", rating: 4.5, intl: true },
  { code: "LH", name: "Lufthansa", hue: "#0A1D3D", rating: 4.4, intl: true },
];

export const airlineByCode = (code: string) =>
  AIRLINES.find((a) => a.code === code) ?? AIRLINES[0];
