import { motion } from "framer-motion";

interface Props {
  from: string;
  to: string;
  tone?: string;       // stroke colour
  className?: string;
}

/** Animated curved flight path with glowing endpoints and a travelling plane. */
export default function RouteArc({ from, to, tone = "#0284C7", className = "" }: Props) {
  const d = "M 30 130 Q 250 -30 470 130";
  return (
    <svg viewBox="0 0 500 160" className={`w-full ${className}`} fill="none" role="img" aria-label={`Route ${from} to ${to}`}>
      <path d={d} stroke={tone} strokeOpacity="0.15" strokeWidth="2" />
      <motion.path
        d={d} stroke={tone} strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray="10 9" className="route-dash"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <circle cx="30" cy="130" r="6" fill={tone} />
      <circle cx="30" cy="130" r="12" fill={tone} opacity="0.25" className="pulse-dot" />
      <circle cx="470" cy="130" r="6" fill={tone} />
      <circle cx="470" cy="130" r="12" fill={tone} opacity="0.25" className="pulse-dot" />
      <text x="30" y="155" textAnchor="middle" className="font-data" fontSize="13" fill="#0B0F1A" fontWeight="700">{from}</text>
      <text x="470" y="155" textAnchor="middle" className="font-data" fontSize="13" fill="#0B0F1A" fontWeight="700">{to}</text>
      <motion.g
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
        style={{ offsetPath: `path("${d}")`, offsetRotate: "auto" }}
      >
        <path d="M0 0 L-12 5 L-9 0 L-12 -5 Z" fill={tone} transform="scale(1.4)" />
      </motion.g>
    </svg>
  );
}
