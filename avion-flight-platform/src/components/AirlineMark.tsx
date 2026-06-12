// Generated monogram marks — avoids shipping trademarked airline logos
// while keeping each carrier instantly recognisable by brand colour.
import { airlineByCode } from "../lib/airlines";

export default function AirlineMark({ code, size = 40 }: { code: string; size?: number }) {
  const al = airlineByCode(code);
  return (
    <div
      className="flex items-center justify-center rounded-2xl font-data font-bold text-white shrink-0"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${al.hue}, ${al.hue}CC)`, fontSize: size * 0.32 }}
      aria-hidden
    >
      {al.code}
    </div>
  );
}
