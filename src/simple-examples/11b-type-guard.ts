export function sortArray(arr: number[]): number[];

export function sortArray(arr: string[]): string[];

export function sortArray(arr: string[] | number[]): any[] {
  if (isNumberArray(arr)) {
    arr.sort((a, b) => a - b);
  } else {
    arr.sort();
  }
  return arr;
}

// user-defined type guard
// note the return type
function isNumberArray(arr: string[] | number[]): arr is number[] {
  return typeof arr[0] === 'number';
}
