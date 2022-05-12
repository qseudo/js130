/* makeList
  input:
    -none
  output:
    -new function
*/

/* returned function
  input:
    -arg not on list (string)
    -arg that is on list (string)
    -no args
      -if items are in list, prints all items on list
      -if no items in list, prints appropriate message
*/

function makeList() {
  let items = [];

  return function(newItem) {
    let index;
    if (newItem) {
      index = items.indexOf(newItem);
      if (index === -1) {
        items.push(newItem);
        console.log(newItem + " added!");
      } else {
        items.splice(index, 1);
        console.log(newItem + " removed!");
      }
    } else if (items.length === 0) {
      console.log("The list is empty.");
    } else {
      items.forEach(item => console.log(item));
    }
  };
}

let list = makeList();
list();

list("make breakfast");
list("make book");

list();

list("make breakfast");

list();