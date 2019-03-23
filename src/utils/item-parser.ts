import { Item } from "../models/item";
import { WorkingItem } from "../models/working-item";
import { Util } from "./utils";
import { isNull } from "util";

/** Class needed to parse a string to an Item object */
export class ItemParser {
  /** The regexp pattern needed to find the item's values in a string */
  static DES_REGEX = /(\d+)\s((\w+\s)+)at\s(\d+.\d+)/;

  /**
   * Function that parse a single string and instantiates the new Item object
   * @returns The item object that's been parsed
  */
  static parser = (order: string): Item => {
    const matcher = order.match(ItemParser.DES_REGEX) || [];

    const name = matcher[2].trim();
    const price = parseFloat(matcher[4]);
    const item: WorkingItem = new WorkingItem(name, price);

    const arr = name.match('imported') || [];

    item.imported = arr.length > 0;
    item.exempt = Util.isExempt(name);

    return item;
  };

  /**
   * Function that returns the quantity of an item
   * @returns The quantity of the single item parsed
  */
  static count = (order: string): number => {
    const arr = order.match(ItemParser.DES_REGEX) || [];
    return parseInt(arr[1],10);
  };

  /**
   * Function that returns a boolean indicating if the string can be parsed
   * @returns The boolean that indicates if the string can be parsed
   */
  static matches = (desc: string): boolean => {
    const arr = desc.match(ItemParser.DES_REGEX) || [];
    return arr.length > 0;
  };
}
