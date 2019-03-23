import fs from "fs";
import readline from "readline";
import { ShoppingCart } from "../models/shopping-cart";
import { ItemParser } from "./item-parser";

const lineReader = (input: string) =>
  readline.createInterface({
    input: fs.createReadStream(input)
  });

export const getFromFile = async (input: string) => {
  const sc = new ShoppingCart();

  try {
    const reader = lineReader(input);
    await reader.on("line", (line: string) => {
      sc.put(ItemParser.parser(line), ItemParser.count(line));
    });

    reader.on('close', () => {
      sc.printOrderInput();
      sc.printOrderResults();
    });
  } catch (e) {
    console.log(e);
  }
};
