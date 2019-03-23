import { getFromFile } from "./utils/file-parser";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("No inputs defined");
  console.error("Example usage: node dist/index.js input/input1.txt ...");
} else {
  args.forEach(arg => getFromFile(arg));
}
