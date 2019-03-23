import { TaxItem } from "./tax-item";
import { Item } from "./item";
import { Util } from "../utils/utils";

/**
 * Class that represents an imported item with a 5% duty fee
 */
export class ImportItem extends TaxItem {
  /** The base item */
  item: Item;

  /** Rate of the duty fee (5%) */
  rate = 0.05;

  /** Name of the item */
  name: string;

  /** Indicates if the item is imported */
  imported: boolean;

  /** Indicates if the item is exempted from the sales taxes */
  exempt: boolean;

  /** Initial price of the item */
  initPrice: number;

  /** Final price of the item */
  price: number;

  /** The constructor inits the super item object and it calculates the final price */
  constructor(item: Item) {
    super(item);
    this.item = item;
    this.name = item.name;
    this.imported = item.imported;
    this.exempt = item.exempt;
    this.initPrice = item.initPrice;

    const salesTax = +parseFloat((item.initPrice * this.rate).toFixed(1));
    this.price = this.initPrice + salesTax;
  }
}
