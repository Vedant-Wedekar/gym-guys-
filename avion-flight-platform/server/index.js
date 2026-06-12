// Local dev API — `npm run dev:api` (Vite proxies /api here).
// In production on Vercel, /api/search.js wraps the same aggregator.
import express from "express";
import cors from "cors";
import { aggregateSearch, parseQuery } from "./core/aggregate.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true, service: "avion-aggregator" }));

app.get("/api/search", async (req, res) => {
  try {
    const q = parseQuery(req.query);
    const result = await aggregateSearch(q);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log(`AVION aggregator listening on :${PORT}`));
