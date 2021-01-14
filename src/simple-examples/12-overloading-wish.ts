export function sortArray(
  arr: object[],
  compare: (a: object, b: object) => number,
): object[] {
  arr.sort(compare);
  return arr;
}


// interface Person {
//   age: number,
//   height: number,
// }
//
// const people: Person[] = [{ age: 18, height: 180 }];
// function compareByAge(a: Person, b: Person) { return a.age - b.age; }
//
// const outcome = sortArray(people, compareByAge);
//
// console.log(outcome[0].age);
