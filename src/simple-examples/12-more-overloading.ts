export function sortArray(arr: number[]): number[];

export function sortArray(arr: string[]): string[];

export function sortArray(
  arr: object[],
  compare: (a: object, b: object) => number,
): object[];

export function sortArray(
  arr: any[],
  compare?: (a: any, b: any) => number,
): any[] {
  if (compare) {
    arr.sort(compare);
  } else if (typeof arr[0] === 'number') {
    (arr as number[]).sort((a, b) => a - b);
  } else {
    arr.sort();
  }
  return arr;
}

// interface Something { value: number }
// const things: Something[] = [];
// function compare(a: Something, b: Something) { return a.value - b.value; }
//
// const outcome = sortArray(things, compare);
//
// console.log(outcome[0].value);
