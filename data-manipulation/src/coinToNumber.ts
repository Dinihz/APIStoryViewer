/**
 * Converts a coin string to a number.
 *
 * @param coin - The coin string to convert.
 * @returns The converted number or null if the conversion fails.
 */
export default function coinToNumber(coin: string): number | null {
  const number = Number(coin.replaceAll(".", "").replace(",", "."));
  console.log(`Converting coin: ${coin} to number: ${number}`);
  return isNaN(number) ? null : number;
}
