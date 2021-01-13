import seedrandom from 'seedrandom';

function show(n: number) {
  console.log(Math.trunc(n*100));
}

const rnd = seedrandom("hi");

console.log('seedrandom');
show(rnd());
show(rnd());
show(rnd());

console.log('Math.random');
show(Math.random());
show(Math.random());
show(Math.random());
