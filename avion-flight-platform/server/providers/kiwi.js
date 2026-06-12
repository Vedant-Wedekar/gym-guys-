// Kiwi.com Tequila API adapter. Docs: https://tequila.kiwi.com/portal/docs
export const kiwiAdapter = {
  name: "Kiwi.com",
  enabled: () => Boolean(process.env.KIWI_TEQUILA_KEY),
  async search(q) {
    const toDMY = (iso) => iso.split("-").reverse().join("/");
    const params = new URLSearchParams({
      fly_from: q.from, fly_to: q.to,
      date_from: toDMY(q.depart), date_to: toDMY(q.depart),
      adults: String(q.pax), curr: "INR", limit: "20",
      selected_cabins: { Economy: "M", "Premium Economy": "W", Business: "C", First: "F" }[q.cabin] ?? "M",
    });
    const res = await fetch(`https://api.tequila.kiwi.com/v2/search?${params}`, {
      headers: { apikey: process.env.KIWI_TEQUILA_KEY },
    });
    if (!res.ok) throw new Error(`Kiwi ${res.status}`);
    const data = await res.json();
    return (data.data ?? []).map((f, i) => ({
      id: `KIWI-${f.id ?? i}`,
      airline: f.airlines?.[0] ?? "—",
      airlineCode: f.airlines?.[0] ?? "—",
      flightNo: `${f.airlines?.[0] ?? ""} ${f.route?.[0]?.flight_no ?? ""}`,
      from: q.from, to: q.to,
      departTime: new Date(f.local_departure).toISOString().slice(11, 16),
      arriveTime: new Date(f.local_arrival).toISOString().slice(11, 16),
      durationMin: Math.round((f.duration?.total ?? 0) / 60),
      stops: Math.min((f.route?.length ?? 1) - 1, 2),
      cabin: q.cabin,
      price: Math.round(f.price),
      provider: "Kiwi.com",
      rating: 4.0,
      baggage: "Per fare rules",
      aircraft: "—",
    }));
  },
};
