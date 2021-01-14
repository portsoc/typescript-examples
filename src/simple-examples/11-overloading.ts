// declarations of sortArray()
export function sortArray(arr: number[]): number[];
export function sortArray(arr: string[]): string[];

// definition (implementation) of sortArray()
export function sortArray(arr: string[] | number[]): any[] {
  if (typeof arr[0] === 'number') {
    (arr as number[]).sort((a, b) => a - b);
  } else {
    arr.sort();
  }
  return arr;
}


// const arr1: number[] = [11, 2, 1, 22];
// const arr2: string[] = ["b", "a"];
//
// const sorted = sortArray(arr1);
