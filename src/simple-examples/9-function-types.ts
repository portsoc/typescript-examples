let r1: () => number;

type NumberFunction = () => number;
let r2: NumberFunction;

r1 = Math.random;
r2 = Math.random;

// r1 = console.log;

console.log(r1(), r2());



interface FunInterface {
  fun: () => number
}

let r3: FunInterface;
r3 = { fun: Math.random };

// r3.fun = console.log;

console.log(r3.fun());
