const r1: () => number = Math.random;

const r2: (() => number) = Math.random;

type NumberFunction = () => number;
const r3: NumberFunction = Math.random;

console.log(r1(), r2(), r3());


interface FunInterface {
  fun: () => number
}
const r4: FunInterface = {
  fun: Math.random
};


interface FunInterface2 {
  fun(): number
}
const r5: FunInterface2 = {
  fun: Math.random
};


interface NumFunInterface {
  (): number
}
const r6: NumFunInterface = Math.random;

console.log(r4.fun(), r5.fun(), r6());
