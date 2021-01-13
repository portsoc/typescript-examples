export function sortArray(arr: number[]): number[];

export function sortArray(arr: string[]): string[];

export function sortArray<T extends unknown>(
  arr: T[],
  compare: (a: T, b: T) => number,
): T[];

export function sortArray<T extends unknown>(
  arr: T[],
  compare?: (a: T, b: T) => number,
): T[] {
  if (compare) {
    arr.sort(compare);
  } else if (typeof arr[0] === 'number') {
    (arr as number[]).sort((a, b) => a - b);
  } else {
    arr.sort();
  }
  return arr;
}
