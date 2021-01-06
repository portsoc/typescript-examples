export function sortArray(arr: number[]): number[];

export function sortArray(arr: string[]): string[];

export function sortArray(
  arr: (string | number)[]
): any[] {
  if (typeof arr[0] === 'number') {
    (arr as number[]).sort((a, b) => a - b);
  } else {
    arr.sort();
  }
  return arr;
}
