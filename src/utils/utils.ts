/** Class containing all the functionalities needed by the various components of the application */
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
    "box of imported chocolates"
  ]);

  /**
   * Returns a number that's been rounded considering two fraction digits
   * @returns The rounded number
   */
  static nearest5Percent = (amount: number): number => {
    const fixedNumber = amount.toFixed(2);
    return parseFloat(fixedNumber);
  };

  /**
   * Function that rounds a number to the nearest integer
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

  /**
   * Returns a boolean that indicates if the set of exempt items contains the input's name
   * @returns
   */
  static isExempt = (name: string) => {
    return Util.exemptItems.has(name);
  };
}
