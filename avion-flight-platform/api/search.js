// Vercel serverless function — same aggregator core as the local Express server.
import { aggregateSearch, parseQuery } from "../server/core/aggregate.js";

export default async function handler(req, res) {
  try {
    const q = parseQuery(req.query);
    const result = await aggregateSearch(q);
    res.setHeader("Cache-Control", "s-maxage=120, stale-while-revalidate=300");
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
