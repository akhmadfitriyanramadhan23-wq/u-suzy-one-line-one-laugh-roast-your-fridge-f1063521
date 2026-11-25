import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh: Roast Your Fridge.
// The joke works because the fridge is personified as a bad tenant: it
// "pays rent" by humming, hoards a sauce older than most leftovers, and
// fails its one job by a single, suspiciously precise degree. Three
// grievances, one sentence, no setup line, no explanation afterwards.
const JOKE =
  "Your fridge hums like it pays rent, hoards soy sauce from 2019, and keeps the milk exactly one degree warmer than my will to cook.";

// Bounty gate: the entry is one line, 1-200 characters.
const MAX_CHARS = 200;
const MIN_CHARS = 1;
const EXPECTED_LINES = 1;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const LINE_ENDING = "\n";

function assertSingleLine(value: string): void {
  const parts = value.split("\n");
  if (parts.length !== EXPECTED_LINES || !parts[0].trim()) {
    throw new Error("entry must be exactly one non-empty line");
  }
}

function assertLengthInRange(value: string): void {
  const charCount = [...value].length;
  if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${charCount}`,
    );
  }
}

function assertNoTrailingNewline(value: string): void {
  if (value.endsWith("\n")) {
    throw new Error("entry must not end with a newline before writing");
  }
}

const payload = `${JOKE}${LINE_ENDING}`;

assertNoTrailingNewline(JOKE);
assertSingleLine(JOKE);
assertLengthInRange(JOKE);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, payload, "utf8");
