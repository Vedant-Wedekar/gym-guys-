import RouteArc from "../components/RouteArc";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-gradient-to-b from-white to-sky-soft/40 pt-12">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 15l18-7-4 6-7 2-3 5-2-4z" /></svg>
              </span>
              <span className="font-display text-lg font-bold tracking-tightest">AVION</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-mist">
              Compare every airline, predict every fare. Built for travellers who book like analysts.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            {[
              ["Product", ["Flight search", "Fare calendar", "Price alerts", "Flight tracker"]],
              ["Providers", ["Amadeus", "Skyscanner", "Kiwi.com", "TravelPayouts"]],
              ["Company", ["About", "Careers", "Privacy", "Terms"]],
            ].map(([h, items]) => (
              <div key={h as string}>
                <p className="eyebrow mb-3">{h}</p>
                <ul className="space-y-2">
                  {(items as string[]).map((i) => (
                    <li key={i}><a href="#top" className="text-sm text-mist transition hover:text-ink">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-md opacity-60"><RouteArc from="NAG" to="ANYWHERE" tone="#0284C7" /></div>
        <p className="border-t border-line py-6 text-center font-data text-[11px] text-mist">
          © {new Date().getFullYear()} AVION · Fares shown are indicative until live provider keys are connected.
        </p>
      </div>
    </footer>
  );
}
