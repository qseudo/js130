function forEach(array, callback, thisArg) {
  for (let idx = 0; idx < array.length; idx += 1) {
    callback.call(thisArg, array[idx], idx, array);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach(['a', 'b', 'c'], (value, index, arr) => console.log(`After ${value} comes ${arr[index + 1]}`));
forEach(['a', 'b', 'c'], item => console.log(item));
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem);