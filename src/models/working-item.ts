import { Item } from "./item";

export class WorkingItem implements Item {
  name: string;

  imported = false;

  exempt = false;

  initPrice: number;

  price: number = 0;

  constructor(name: string, initPrice: number) {
    this.name = name;
    this.initPrice = initPrice;
    this.price = initPrice;
  }
}
