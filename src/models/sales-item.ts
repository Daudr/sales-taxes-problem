import { TaxItem } from "./tax-item";
import { Item } from "./item";
import { Util } from "../utils/utils";

/** Class that represents an item with a sales taxes of 10% */
export class SalesItem extends TaxItem {
  item: Item;

  rate: number = 0.1;

  name: string;
  imported: boolean;
  exempt: boolean;
  initPrice: number;

  price: number = 0;

  constructor(item: Item) {
    super(item);
    this.item = item;
    this.name = item.name;
    this.imported = item.imported;
    this.exempt = item.exempt;
    this.initPrice = item.initPrice;

    const salesTax: number = Util.nearest5Percent(this.initPrice * this.rate);
    this.price = +((this.item.price + salesTax).toFixed(2));
  }
}
