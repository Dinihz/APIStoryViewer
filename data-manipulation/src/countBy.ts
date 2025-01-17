export interface CountList {
  [key: string]: number;
}

export default function countBy(arr: (string | number)[]): CountList {
  return arr.reduce((acc: CountList, item) => {
    acc[item] = (acc[item] ?? 0) + 1;
    return acc;
  }, {});
}
