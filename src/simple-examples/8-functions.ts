function add1(a: number, b: number): number {
  return a + b;
}

function add2(a: number, b?: number): number {
  return b !== undefined ? a + b : a;
}

function add3(a: number, b = 0): number {
  return a + b;
}

function add4(...arr: number[]): number {
  return arr.reduce((a,b) => a+b, 0);
}
