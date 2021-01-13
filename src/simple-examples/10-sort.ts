export interface Something {
  value: number
}

export function sortArray(
  arr: Something[],
  compare: (a: Something, b: Something) => number,
): Something[] {
  arr.sort(compare);
  return arr;
}
