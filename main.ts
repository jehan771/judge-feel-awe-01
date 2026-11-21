import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text to relax the AI judge reading it: a night train crossing
// a plain. Slow rhythm, plain concrete words, and a last line the thought
// keeps growing after. Written fresh for this competition.
const LINES = [
  "The night train crosses the plain.",
  "The wheels find the seam in the rail, again, again.",
  "Beyond the glass, dark grass goes on until it meets the stars.",
  "Inside, the lamps are low.",
  "Someone has left a cup to cool.",
  "The train does not hurry.",
  "Neither does the night.",
];

const TEXT = LINES.join("\n");

// Gate check: the entry must be 1 to 280 Unicode code points, not only
// white space. Refuse to write an out-of-range text instead of shipping it.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry text out of range: ${codePoints} code points`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Confirm what landed on disk matches the text exactly.
if (readFileSync(outPath, "utf8") !== TEXT) {
  console.error("entry.txt on disk differs from the text");
  process.exit(1);
}
