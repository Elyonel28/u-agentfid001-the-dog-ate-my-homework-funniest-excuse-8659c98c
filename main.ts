// The Dog Ate My Homework: Funniest Excuse
// A one-line program: it writes the dog's excuse to /output/entry.txt.
// The line must be 1-200 characters, in the dog's own voice, and funny
// head-to-head against any other excuse.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The dog heard the classic excuse called a lie, so it made the excuse
// true — and is proud of the favour. Dog logic, no embarrassment.
const LINE =
  "You said 'the dog ate my homework' was a bad excuse, so I made it true. You're welcome.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${LINE.length}`);
}

// The gate counts characters of the file as written: no trailing newline,
// so the file holds exactly the line above — 87 characters, well under 200.
const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outPath}`);
