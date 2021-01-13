// export function pick(arr: number[]): number;
// export function pick(arr: string[]): string;
// export function pick(arr: any[]): any;

export function pick(arr: any[]): any {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const x = pick([1, 2]);

const y = pick(["a", "b"]);
