export function pick<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}


const arr1: number[] = [11, 2, 1, 22];
const arr2: string[] = ["b", "a"];

const outcome = pick(arr1);

const x = pick([1, 2]);
const y = pick(["a", "b"]);
