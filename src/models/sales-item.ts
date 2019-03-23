import { NoTaxItem } from "./no-tax-item";
import { Item } from "./item";
import { Util } from "../utils/utils";

/** Class that represents an item with a sales taxes of 10% */
export class SalesItem extends NoTaxItem {
  /** The base item */
  item: Item;

  /** Tax rate of 10% */
  rate: number = 0.1;

  /** Name of the item */
  name: string;

  /** Indicates if the item is imported */
  imported: boolean;

  /** Indicates if the item is exempt from taxation */
  exempt: boolean;

  /** Initial price of the item */
  initPrice: number;

  /** Final price of the item */
  price: number = 0;

  /** Initializes the item and calculates its final price */
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
