// AviationStack adapter — schedules/status (used to enrich live tracker data,
// not pricing). Docs: https://aviationstack.com/documentation
export const aviationstackAdapter = {
  name: "AviationStack",
  enabled: () => Boolean(process.env.AVIATIONSTACK_KEY),
  async search() { return []; }, // pricing not offered by this API
  async status(flightIata) {
    const params = new URLSearchParams({ access_key: process.env.AVIATIONSTACK_KEY, flight_iata: flightIata });
    const res = await fetch(`https://api.aviationstack.com/v1/flights?${params}`);
    if (!res.ok) throw new Error(`AviationStack ${res.status}`);
    return (await res.json()).data?.[0] ?? null;
  },
};
