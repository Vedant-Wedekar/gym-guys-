/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F1A",
        mist: "#5B6473",
        line: "#E8ECF2",
        sky: { soft: "#E6F4FD", mid: "#38BDF8", deep: "#0284C7" },
        emer: { soft: "#E7F8F1", mid: "#34D399", deep: "#059669" },
        royal: { soft: "#E9EEFE", mid: "#4F74F8", deep: "#1D4ED8" },
        gold: { soft: "#FAF3E3", mid: "#D9B25C", deep: "#A97E2F" },
        flame: { soft: "#FEF0E6", mid: "#FB923C", deep: "#EA6A12" }
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Schibsted Grotesk", "system-ui", "sans-serif"],
        data: ["B612 Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        float: "0 24px 60px -20px rgba(11,15,26,0.18), 0 4px 16px -8px rgba(11,15,26,0.08)",
        card: "0 12px 32px -16px rgba(11,15,26,0.14), 0 2px 8px -4px rgba(11,15,26,0.06)",
        glow: "0 0 0 1px rgba(255,255,255,0.6) inset, 0 20px 50px -20px rgba(2,132,199,0.35)"
      },
      borderRadius: { pill: "999px", panel: "28px" },
      letterSpacing: { tightest: "-0.04em" }
    }
  },
  plugins: []
};
