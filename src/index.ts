import { getFromFile } from "./utils/file-parser";

// We don't consider the first two arguments (path to node executable and path to the file that's being executed)
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("No inputs defined");
  console.error("Example usage: node dist/index.js input/input1.txt ...");
} else {
  // For every input we call the getFromFile function
  args.forEach(arg => getFromFile(arg));
}
