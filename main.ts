import { mkdirSync, writeFileSync } from "node:fs";

// Roast your fridge: one line, one specific detail worth mocking (the 2019
// soy sauce), a twist (it hums like it pays rent yet fails at its one job),
// and a concrete ending instead of an explanation.
// Revision: the ending gets a precise measurement — exactly one degree
// warmer — which makes the fridge's failure sound measured and deliberate.
const lines = [
  "Your fridge hums like it pays rent, hoards soy sauce from 2019, and keeps the milk exactly one degree warmer than my will to cook.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
