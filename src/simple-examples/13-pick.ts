// export function pick(arr: number[]): number;
// export function pick(arr: string[]): string;

export function pick(arr: any[]): any {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}


const arr1: number[] = [11, 2, 1, 22];
const arr2: string[] = ["b", "a"];

const outcome = pick(arr1);
