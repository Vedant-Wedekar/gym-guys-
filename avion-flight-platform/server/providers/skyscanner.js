// Skyscanner partner API adapter (requires an approved partner key).
// Docs: https://developers.skyscanner.net
export const skyscannerAdapter = {
  name: "Skyscanner",
  enabled: () => Boolean(process.env.SKYSCANNER_KEY),
  async search(q) {
    const res = await fetch("https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create", {
      method: "POST",
      headers: { "x-api-key": process.env.SKYSCANNER_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        query: {
          market: "IN", locale: "en-IN", currency: "INR",
          queryLegs: [{
            originPlaceId: { iata: q.from },
            destinationPlaceId: { iata: q.to },
            date: { year: +q.depart.slice(0, 4), month: +q.depart.slice(5, 7), day: +q.depart.slice(8, 10) },
          }],
          adults: q.pax,
          cabinClass: { Economy: "CABIN_CLASS_ECONOMY", "Premium Economy": "CABIN_CLASS_PREMIUM_ECONOMY", Business: "CABIN_CLASS_BUSINESS", First: "CABIN_CLASS_FIRST" }[q.cabin],
        },
      }),
    });
    if (!res.ok) throw new Error(`Skyscanner ${res.status}`);
    const data = await res.json();
    const itins = data.content?.results?.itineraries ?? {};
    return Object.entries(itins).slice(0, 20).map(([id, it], i) => ({
      id: `SKY-${i}`,
      airline: "—", airlineCode: "—", flightNo: "—",
      from: q.from, to: q.to,
      departTime: "—", arriveTime: "—",
      durationMin: 0, stops: 0, cabin: q.cabin,
      price: Math.round(Number(it.pricingOptions?.[0]?.price?.amount ?? 0) / 1000),
      provider: "Skyscanner", rating: 4.1, baggage: "Per fare rules", aircraft: "—",
    }));
  },
};
