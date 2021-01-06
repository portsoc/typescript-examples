function showItems(arr) {
  console.log(`${arr.length} item(s):`);
  for (let i=0; i<arr.length; i+=1) {
    console.log(arr[i]);
  }
}

showItems('Matt', 'Rich', 'Jack');
