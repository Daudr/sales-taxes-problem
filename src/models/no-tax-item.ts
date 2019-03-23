import { Item } from "./item";

/** Represents a base item without any tax */
export abstract class NoTaxItem {
  /** The base item */
  item: Item;

  /** Rate of the tax applied to the item */
  rate: number = 0;

  /** Final price of the item */
  price: number;

  /** Initializes the item */
  constructor(item: Item) {
    this.item = item;
    this.price = item.initPrice;
  }
}
