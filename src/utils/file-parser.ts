import fs from "fs";
import readline from "readline";
import { ShoppingCart } from "../models/shopping-cart";
import { ItemParser } from "./item-parser";

/** Function that returns a readline.Interface with the input file that needs to be read */
const lineReader = (input: string) =>
  readline.createInterface({
    input: fs.createReadStream(input)
  });

/** Function that opens a file and reads every line to add the item to a shopping cart */
export const getFromFile = async (input: string) => {
  const sc = new ShoppingCart();

  try {
    const reader = lineReader(input);

    // On every line of the file there should be an item that we parse with an ItemParser
    await reader.on("line", (line: string) => {
      sc.put(ItemParser.parser(line), ItemParser.count(line));
    });

    // When there isn't more lines in the opened file we call the printing functions of the shopping cart
    reader.on('close', () => {
      sc.printOrderInput();
      sc.printOrderResults();
    });
  } catch (e) {
    console.log(e);
  }
};
