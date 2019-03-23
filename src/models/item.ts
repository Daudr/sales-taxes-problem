/** Interface that represents an item */
export interface Item {
  /** The name of the item */
  name: string;

  /** The initial price of the item */
  initPrice: number;

  /** Indicates if the item is imported */
  imported: boolean;

  /** Indicates if the item is exempted from the sales taxes */
  exempt: boolean;

  /** Final prie of the item */
  price: number;
}
