import { Item } from "../models/item";
import { WorkingItem } from "../models/working-item";
import { Util } from "./utils";
import { isNull } from "util";

export class ItemParser {
  static DES_REGEX = /(\d+)\s((\w+\s)+)at\s(\d+.\d+)/;

  static parser = (order: string): Item => {
    const matcher = order.match(ItemParser.DES_REGEX) || [];

    // console.log(matcher);

    const name = matcher[2].trim();
    const price = parseFloat(matcher[4]);
    const item: WorkingItem = new WorkingItem(name, price);

    const arr = name.match('imported') || [];

    item.imported = arr.length > 0;
    item.exempt = Util.isExempt(name);

    return item;
  };

  static count = (order: string): number => {
    const arr = order.match(ItemParser.DES_REGEX) || [];
    return parseInt(arr[1],10);
  };

  static matches = (desc: string): boolean => {
    const arr = desc.match(ItemParser.DES_REGEX) || [];
    return arr.length > 0;
  };
}
