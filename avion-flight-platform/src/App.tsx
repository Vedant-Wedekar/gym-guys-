import { useCallback, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Results from "./sections/Results";
import RouteShowcase from "./sections/RouteShowcase";
import PriceCalendar from "./sections/PriceCalendar";
import PopularRoutes from "./sections/PopularRoutes";
import Intelligence from "./sections/Intelligence";
import Footer from "./sections/Footer";
import { useLenis } from "./hooks/useLenis";
import { searchFlights } from "./lib/api";
import type { FlightOffer, SearchQuery } from "./lib/types";

export default function App() {
  useLenis();
  const [query, setQuery] = useState<SearchQuery | null>(null);
  const [offers, setOffers] = useState<FlightOffer[]>([]);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState("");

  const onSearch = useCallback(async (q: SearchQuery) => {
    setQuery(q);
    setLoading(true);
    setOffers([]);
    requestAnimationFrame(() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" }));
    const { offers, source } = await searchFlights(q);
    setOffers(offers);
    setSource(source);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero onSearch={onSearch} busy={loading} />
        <Results query={query} offers={offers} loading={loading} source={source} />
        <RouteShowcase />
        <PriceCalendar query={query} />
        <PopularRoutes />
        <Intelligence />
      </main>
      <Footer />

      {/* mobile sticky CTA */}
      <a href="#search"
        className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-pill bg-ink py-3.5 text-sm font-semibold text-white shadow-float md:hidden"
        aria-label="Jump to flight search">
        <FiSearch size={16} /> Search flights
      </a>
    </div>
  );
}
