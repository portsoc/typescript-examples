interface Person {
  name: string,
  num: string, // e.g. +44 2392 …
}

interface Part {
  name: string,
  num: string, // e.g. HSC0424PP
}

const p: Part = {
  name: '3/4" pan head screw',
  num: 'HSC0424PP',
}

const people: Person[] = [];
people.push(p);
