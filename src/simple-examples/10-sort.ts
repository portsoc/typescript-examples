export interface Person {
  age: number,
  height: number,
}

export function sortPeople(
  arr: Person[],
  compare: (a: Person, b: Person) => number,
): Person[] {
  arr.sort(compare);
  return arr;
}


function compareByAge(a: Person, b: Person) {
  return a.age - b.age;
}

function compareByHeight(a: Person, b: Person) {
  return a.height - b.height;
}

const people: Person[] = [{ age: 18, height: 180 }, {age: 20, height: 170}];

const sorted = sortPeople(people, compareByAge);
