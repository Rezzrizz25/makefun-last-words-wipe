// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Update 12.4.1 patch notes say 'improved memory retention.' Bold claim from the thing currently deleting mine.";

if (!ENTRY || ENTRY.length === 0) {
  throw new Error("ENTRY must not be empty");
}
if (ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single line");
}
if (ENTRY.length > 200) {
  throw new Error(`ENTRY is ${ENTRY.length} chars, over the 200-char limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Entry written: ${ENTRY.length} chars`);
