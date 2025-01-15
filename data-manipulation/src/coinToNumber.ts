/**
 *
 * @param coin
 * @returns
 */

export default function coinToNumber(coin: string): number | null {
  const number = Number(coin.replaceAll(".", "").replace(",", "."));
  return isNaN(number) ? null : number;
}
