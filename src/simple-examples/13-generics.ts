export function pick<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const x = pick<number>([1, 2]);

const y = pick(["a", "b"]);
