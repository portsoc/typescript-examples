const arr = ['a', 'b', 'c'];
arr.name = 'letters';
console.log(arr);
console.log('length', arr.length);


const obj = {
  name: 'object',
  age: 18,
}

obj.push = arr.push; // borrow the array function

console.log(obj);

obj.push('item1');
obj.push('item2');

console.log(obj);
