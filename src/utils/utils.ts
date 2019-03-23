export class Util {
  /**
   * Set that contains all the items that are except from taxation
   */
  static exemptItems: Set<string> = new Set<string>([
    "book",
    "chocolate bar",
    "packet of headache pills",
    "imported box of chocolates",
    "box of chocolates",
    "chocolate",
    "pills",
    'box of imported chocolates'
  ]);

  static nearest5Percent = (amount: number): number => {
    // const roundNumber = Math.round(amount * 0.05) / 0.05;
    const fixedNumber = amount.toFixed(2);
    return parseFloat(fixedNumber);
  };

  /**
   * Function that rounds a number
   *
   * @param amount Number to be rounded
   * @param precision Precision to be used
   *
   * @returns The rounded number
   */
  static roundPrice = (amount: number, precision = 1): number => {
    var factor = Math.pow(10, precision);
    var tempNumber = amount * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  };

  static isExempt = (name: string) => {
    return Util.exemptItems.has(name);
  };
}
