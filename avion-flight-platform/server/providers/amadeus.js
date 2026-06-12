// Amadeus Self-Service API adapter.
// Docs: https://developers.amadeus.com — Flight Offers Search v2.
let tokenCache = { token: null, exp: 0 };

async function getToken() {
  if (tokenCache.token && Date.now() < tokenCache.exp) return tokenCache.token;
  const res = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.AMADEUS_CLIENT_ID,
      client_secret: process.env.AMADEUS_CLIENT_SECRET,
    }),
  });
  const data = await res.json();
  tokenCache = { token: data.access_token, exp: Date.now() + (data.expires_in - 60) * 1000 };
  return tokenCache.token;
}

const CABIN_MAP = { Economy: "ECONOMY", "Premium Economy": "PREMIUM_ECONOMY", Business: "BUSINESS", First: "FIRST" };

export const amadeusAdapter = {
  name: "Amadeus",
  enabled: () => Boolean(process.env.AMADEUS_CLIENT_ID && process.env.AMADEUS_CLIENT_SECRET),
  async search(q) {
    const token = await getToken();
    const params = new URLSearchParams({
      originLocationCode: q.from,
      destinationLocationCode: q.to,
      departureDate: q.depart,
      adults: String(q.pax),
      travelClass: CABIN_MAP[q.cabin] ?? "ECONOMY",
      currencyCode: "INR",
      max: "20",
      ...(q.ret ? { returnDate: q.ret } : {}),
    });
    const res = await fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error(`Amadeus ${res.status}`);
    const data = await res.json();
    return (data.data ?? []).map((o, i) => {
      const seg = o.itineraries[0].segments;
      const first = seg[0], last = seg[seg.length - 1];
      const durISO = o.itineraries[0].duration; // PT2H35M
      const h = Number(/(\d+)H/.exec(durISO)?.[1] ?? 0);
      const m = Number(/(\d+)M/.exec(durISO)?.[1] ?? 0);
      return {
        id: `AMA-${o.id}-${i}`,
        airline: first.carrierCode,
        airlineCode: first.carrierCode,
        flightNo: `${first.carrierCode} ${first.number}`,
        from: q.from, to: q.to,
        departTime: first.departure.at.slice(11, 16),
        arriveTime: last.arrival.at.slice(11, 16),
        durationMin: h * 60 + m,
        stops: Math.min(seg.length - 1, 2),
        via: seg.length > 1 ? seg[0].arrival.iataCode : undefined,
        cabin: q.cabin,
        price: Math.round(Number(o.price.grandTotal)),
        provider: "Amadeus",
        rating: 4.2,
        baggage: "Per fare rules",
        aircraft: first.aircraft?.code ?? "—",
      };
    });
  },
};
