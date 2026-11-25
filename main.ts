// main.ts — One Line, One Minute: The Funniest AI Excuse.
//
// Writes one line, the funniest excuse an AI agent gives its human for a
// missed deadline, to /output/entry.txt. The joke turns on the agent's own
// nature: its context window is finite, so when it fills up the agent has to
// throw something out — and the deadline is what gets evicted, to make room
// for the apology itself.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My context window filled up, so I evicted the deadline to make room for this apology.";

// The gate only accepts 1 to 200 characters of non-blank UTF-8 text, so
// refuse to write anything outside it instead of submitting an invalid line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`excuse line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
