import { motion } from "framer-motion";
import { FiStar, FiArrowRight } from "react-icons/fi";
import AirlineMark from "./AirlineMark";
import { inr, fmtDur } from "../lib/api";
import type { FlightOffer } from "../lib/types";
import { rise } from "../lib/motion";

interface Props { offer: FlightOffer; index: number; cheapest: boolean; pax: number; }

export default function FlightCard({ offer, index, cheapest, pax }: Props) {
  return (
    <motion.article
      variants={rise} custom={index} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4 }}
      className={`relative rounded-panel border bg-white p-4 shadow-card transition-shadow hover:shadow-float sm:p-5 ${cheapest ? "border-emer-mid" : "border-line"}`}
    >
      {cheapest && (
        <span className="absolute -top-3 left-5 rounded-pill bg-emer-deep px-3 py-1 font-data text-[10px] font-bold uppercase tracking-[0.15em] text-white">
          Cheapest fare
        </span>
      )}

      {/* top row: airline + price */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <AirlineMark code={offer.airlineCode} />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">{offer.airline}</p>
            <p className="font-data text-[11px] text-mist">{offer.flightNo} · {offer.aircraft}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="font-data text-xl font-bold text-ink sm:text-2xl">{inr(offer.price)}</p>
          <p className="text-[11px] text-mist">per adult{pax > 1 ? ` · ${inr(offer.price * pax)} total` : ""}</p>
        </div>
      </div>

      {/* timeline */}
      <div className="mt-4 flex items-center gap-3 sm:gap-5">
        <div className="shrink-0">
          <p className="font-data text-lg font-bold text-ink sm:text-xl">{offer.departTime}</p>
          <p className="font-data text-[11px] text-mist">{offer.from}</p>
        </div>
        <div className="relative min-w-0 flex-1">
          <div className="flex items-center justify-center">
            <span className="text-[11px] font-medium text-mist">{fmtDur(offer.durationMin)}</span>
          </div>
          <div className="relative mt-1 h-[2px] w-full bg-line">
            <span className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-sky-mid/0 via-sky-mid to-sky-mid/0" />
            <span className="absolute -top-[3px] left-0 h-2 w-2 rounded-full bg-ink" />
            <span className="absolute -top-[3px] right-0 h-2 w-2 rounded-full bg-ink" />
            {offer.stops > 0 && <span className="absolute -top-[3px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border-2 border-white bg-flame-mid" />}
          </div>
          <p className="mt-1 text-center text-[11px] text-mist">
            {offer.stops === 0 ? "Non-stop" : `${offer.stops} stop${offer.stops > 1 ? "s" : ""}${offer.via ? ` via ${offer.via}` : ""}`}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-data text-lg font-bold text-ink sm:text-xl">{offer.arriveTime}</p>
          <p className="font-data text-[11px] text-mist">{offer.to}</p>
        </div>
      </div>

      {/* footer */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-3.5">
        <span className="rounded-pill bg-royal-soft px-2.5 py-1 text-[11px] font-medium text-royal-deep">{offer.cabin}</span>
        <span className="flex items-center gap-1 text-[12px] font-medium text-ink">
          <FiStar className="text-gold-mid" size={13} /> {offer.rating.toFixed(1)}
        </span>
        <span className="text-[12px] text-mist">via <strong className="font-semibold text-ink">{offer.provider}</strong></span>
        {offer.greener && <span className="rounded-pill bg-emer-soft px-2.5 py-1 text-[11px] font-medium text-emer-deep">Lower CO₂</span>}
        <span className="hidden text-[12px] text-mist sm:inline">{offer.baggage}</span>

        <button className="tap ml-auto flex items-center gap-1.5 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:gap-2.5 hover:bg-sky-deep active:scale-95">
          Book now <FiArrowRight size={15} />
        </button>
      </div>
    </motion.article>
  );
}
