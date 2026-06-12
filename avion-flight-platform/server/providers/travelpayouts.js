// TravelPayouts (Aviasales data API) adapter — cached cheap fares per route.
export const travelpayoutsAdapter = {
  name: "TravelPayouts",
  enabled: () => Boolean(process.env.TRAVELPAYOUTS_TOKEN),
  async search(q) {
    const params = new URLSearchParams({
      origin: q.from, destination: q.to,
      departure_at: q.depart, currency: "inr", limit: "15", sorting: "price",
    });
    const res = await fetch(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?${params}`, {
      headers: { "X-Access-Token": process.env.TRAVELPAYOUTS_TOKEN },
    });
    if (!res.ok) throw new Error(`TravelPayouts ${res.status}`);
    const data = await res.json();
    return (data.data ?? []).map((f, i) => ({
      id: `TP-${i}-${f.flight_number ?? i}`,
      airline: f.airline ?? "—",
      airlineCode: f.airline ?? "—",
      flightNo: `${f.airline ?? ""} ${f.flight_number ?? ""}`,
      from: q.from, to: q.to,
      departTime: (f.departure_at ?? "").slice(11, 16) || "—",
      arriveTime: "—",
      durationMin: f.duration ?? 0,
      stops: Math.min(f.transfers ?? 0, 2),
      cabin: q.cabin,
      price: Math.round(f.price ?? 0),
      provider: "TravelPayouts",
      rating: 4.0,
      baggage: "Per fare rules",
      aircraft: "—",
    }));
  },
};
