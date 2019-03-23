import { Item } from "./item";
import { ImportItem } from "./import-item";
import { SalesItem } from "./sales-item";

/** Shopping cart containing all the items */
export class ShoppingCart {
  /** Contains all the items */
  itemMap: Map<Item, number> = new Map<Item, number>();

  /** Adds a new item to the shopping cart */
  put = (item: Item, count: number): void => {
    if (item.imported) item = new ImportItem(item);
    if (!item.exempt) item = new SalesItem(item);

    this.itemMap.set(item, count);
  };

  /** Removes an item from the shopping cart */
  remove = (item: Item) => this.itemMap.delete(item);

  /** Clears the shopping cart */
  clear = () => this.itemMap.clear();

  /** Returns the quantity of an item */
  quantity = (item: Item) => this.itemMap.get(item);

  /** Return the total price of the cart with taxes included */
  taxTotal = () => {
    let taxTotal = 0;
    this.itemMap.forEach((quantity, item) => {
      const subTotal = item.price * quantity;
      const subInitTotal = item.initPrice * quantity;
      taxTotal += +(subTotal - subInitTotal).toFixed(2);
    });

    return taxTotal;
  };

  /** Returns the total price of the cart without the taxes */
  total = () => {
    let total = 0;
    this.itemMap.forEach((quantity, item) => {
      const subTotal = item.price * quantity;
      total += subTotal;
    });

    return total;
  };

  /** Prints the items before the taxes are being calculated */
  printOrderInput = () => {
    console.log("Order input:");
    this.itemMap.forEach((quantity, item) => {
      console.log(
        `${this.itemMap.get(item)} ${item.name} at ${item.initPrice}`
      );
    });
  };

  /** Prints the items with the taxes included and the total prices */
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
