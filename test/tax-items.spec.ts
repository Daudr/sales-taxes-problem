import { assert } from "chai";

import { WorkingItem } from "../src/models/working-item";
import { SalesItem } from "../src/models/sales-item";
import { ImportItem } from "../src/models/import-item";

describe("TaxItems", () => {
  describe("Test items", () => {
    let item: WorkingItem;
    let salesItem: SalesItem;
    let importItem: ImportItem;

    beforeEach(() => {
      item = new WorkingItem("Test", 100.0);
      importItem = new ImportItem(item);
      salesItem = new SalesItem(importItem);
    });

    it("Should be named 'Test'", () => {
      assert.equal(item.name, "Test");
    });

    it("Should be have a 100.00 price", () => {
      assert.equal(item.price, 100.0);
    });

    it("Import item should have a 105.00 price", () => {
      assert.equal(importItem.price, 105.0);
    });

    it("Sales item should have a 115.00 price", () => {
      assert.equal(salesItem.price, 115.0);
    });
  });
});
