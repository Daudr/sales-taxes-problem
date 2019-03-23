import { assert } from "chai";

import { ShoppingCart } from "../src/models/shopping-cart";
import { ItemParser } from "../src/utils/item-parser";

describe("ShoppingCart", () => {
  describe("Test input", () => {
    let sc: ShoppingCart;

    beforeEach(() => {
      sc = new ShoppingCart();

      sc.put(
        ItemParser.parser("1 book at 12.49"),
        ItemParser.count("1 book at 12.49")
      );
      sc.put(
        ItemParser.parser("1 music CD at 14.99"),
        ItemParser.count("1 music CD at 14.99")
      );
      sc.put(
        ItemParser.parser("1 chocolate bar at 0.85"),
        ItemParser.count("1 chocolate bar at 0.85")
      );
    });

    it("Tax total should be 1.5", () => {
      assert.equal(sc.taxTotal(), 1.5);
    });

    it("Total should be 29.83", () => {
      assert.equal(sc.total(), 29.83);
    });
  });

  describe("Test double entry", () => {
    let sc: ShoppingCart;

    beforeEach(() => {
      sc = new ShoppingCart();

      sc.put(
        ItemParser.parser("2 book at 10.00"),
        ItemParser.count("2 book at 10.00")
      );
      sc.put(
        ItemParser.parser("2 book at 100.00"),
        ItemParser.count("2 book at 100.00")
      );
    });

    it("Size should be 2", () => {
      assert.equal(sc.itemMap.size, 2);
    });
  });
});
