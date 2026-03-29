import tokenNames from "@atlaskit/tokens/token-names";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const globalPath = join(__dirname, "global.css");

const startMarker = "/* <token-theme:start> */";
const endMarker = "/* <token-theme:end> */";

const lines = Object.entries(tokenNames)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([semanticKey, dsVarName]) => {
    const alias = `--${semanticKey.replace(/\./g, "-")}`;
    return `  ${alias}: var(${dsVarName});`;
  });

const themeBlock = `@theme {
${lines.join("\n")}
}`;

const content = readFileSync(globalPath, "utf8");
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
  throw new Error(`${globalPath} must contain ${startMarker} and ${endMarker} in order`);
}

const before = content.slice(0, startIdx);
const after = content.slice(endIdx + endMarker.length);

const newContent = `${before}${startMarker}\n${themeBlock}\n${endMarker}${after}`;

writeFileSync(globalPath, newContent, "utf8");
