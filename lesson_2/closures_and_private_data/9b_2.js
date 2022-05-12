// eslint-disable-next-line max-lines-per-function
function makeList() {
  let items = [];

  return {
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },

    add(inputItem) {
      let index = items.indexOf(inputItem);
      if (index === -1) {
        items.push(inputItem);
        console.log(`${inputItem} added!`);
      }
    },

    remove(inputItem) {
      let index = items.indexOf(inputItem);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${inputItem} removed!`);
      }
    },
  };
}

let list = makeList();
list.add("peas");

list.list();

list.add("corn");

list.list();

list.remove("peas");

list.list();