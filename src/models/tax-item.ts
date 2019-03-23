import { Item } from "./item";

export abstract class TaxItem {
  item: Item;

  rate: number = 0;

  price: number;

  constructor(item: Item) {
    this.item = item;
    this.price = item.initPrice;
  }
}
