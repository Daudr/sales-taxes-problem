import { Item } from "./item";
import { ImportItem } from "./import-item";
import { SalesItem } from "./sales-item";
import { Util } from "../utils/utils";

export class ShoppingCart {
  itemMap: Map<Item, number> = new Map<Item, number>();

  constructor() {}

  put = (item: Item, count: number): void => {
    if (item.imported) item = new ImportItem(item);
    if (!item.exempt) item = new SalesItem(item);
    const i: number | undefined = this.itemMap.get(item);
    if (i != null) count += i;
    this.itemMap.set(item, count);
  };

  remove = (item: Item) => this.itemMap.delete(item);

  clear = () => this.itemMap.clear();

  quantity = (item: Item) => this.itemMap.get(item);

  items = () => this.itemMap.keys();

  taxTotal = () => {
    let taxTotal = 0;
    this.itemMap.forEach((quantity, item) => {
      const subTotal = item.price * quantity;
      const subInitTotal = item.initPrice * quantity;
      taxTotal += subTotal - subInitTotal;
    });

    return taxTotal;
  };

  total = () => {
    let total = 0;
    this.itemMap.forEach((quantity, item) => {
      const subTotal = item.price * quantity;
      total += subTotal;
    });

    return Util.roundPrice(total);
  };

  printOrderInput = () => {
    console.log("Order input:");
    this.itemMap.forEach((quantity, item) => {
      console.log(
        `${this.itemMap.get(item)} ${item.name} at ${item.initPrice}`
      );
    });
  };

  printOrderResults = () => {
    let taxTotal = 0;
    let total = 0;
    console.log("Order results:");
    this.itemMap.forEach((quantity, item) => {
      const subTotal = item.price * quantity;
      const subInitTotal = item.initPrice * quantity;
      taxTotal += +((subTotal - subInitTotal).toFixed(2));
      total += subTotal;
      console.log(`${quantity} ${item.name}: ${subTotal}`);
    });

    console.log(`Sales Taxes: ${taxTotal.toFixed(2)}`);
    console.log(`Total: ${total}\n\n`);
  };
}
