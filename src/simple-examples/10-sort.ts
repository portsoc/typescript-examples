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


function compare(a: Something, b: Something) {
  return a.value - b.value;
}

const things: Something[] = [];

const sorted = sortArray(things, compare);
