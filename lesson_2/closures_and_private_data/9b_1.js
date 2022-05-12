// eslint-disable-next-line max-lines-per-function
function makeList() {
  return {
    items: [],

    list() {
      if (this.items.length === 0) {
        console.log('The list is empty.');
      } else {
        this.items.forEach(item => console.log(item));
      }
    },

    add(inputItem) {
      let index = this.items.indexOf(inputItem);
      if (index === -1) {
        this.items.push(inputItem);
        console.log(`${inputItem} added!`);
      }
    },

    remove(inputItem) {
      let index = this.items.indexOf(inputItem);
      if (index !== -1) {
        this.items.splice(index, 1);
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