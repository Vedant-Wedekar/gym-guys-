export type CabinClass = "Economy" | "Premium Economy" | "Business" | "First";
export type TripType = "oneway" | "round";

export interface SearchQuery {
  from: string;
  to: string;
  depart: string;
  ret?: string;
  trip: TripType;
  pax: number;
  cabin: CabinClass;
}

export interface FlightOffer {
  id: string;
  airline: string;
  airlineCode: string;
  flightNo: string;
  from: string;
  to: string;
  departTime: string;
  arriveTime: string;
  durationMin: number;
  stops: 0 | 1 | 2;
  via?: string;
  cabin: CabinClass;
  price: number;
  provider: string;
  rating: number;
  baggage: string;
  aircraft: string;
  greener?: boolean;
}

export interface Airport {
  code: string;
  city: string;
  name: string;
  country: string;
}

export type SortKey = "cheapest" | "fastest" | "recommended" | "stops" | "rating";

export interface Filters {
  timeOfDay: "any" | "morning" | "evening";
  nonStopOnly: boolean;
  airlines: string[];
  maxPrice: number;
  maxDurationMin: number;
}
