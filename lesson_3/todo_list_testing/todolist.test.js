/* eslint-disable max-lines-per-function */
const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first returns first item in list', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('last returns last item in list', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('shift removes and returns first item in list', () => {
    let todo = list.shift();

    expect(todo).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop removes and returns last item in list', () => {
    let todo = list.pop();

    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone returns true when all items in the list are done', () => {
    list.forEach(todo => todo.markDone());
    expect(list.isDone()).toBe(true);
  });

  test('isDone returns false if all todos are not done', () => {
    expect(list.isDone()).toBe(false);
  });

  test('add throws a TypeError if you add a non-Todo item', () => {
    let newList = new TodoList();
    expect(() => list.add(newList)).toThrow();
    expect(() => list.add('test')).toThrow();
    expect(() => list.add(5)).toThrow();
    expect(() => list.add([1, 2, 3])).toThrow();
    expect(() => list.add({ a: 1 })).toThrow();
  });

  test('itemAt returns item at given index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  });

  test('markDoneAt marks element at given index as done', () => {
    list.markDoneAt(0);
    list.markDoneAt(1);

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
    expect(() => list.markDoneAt(5)).toThrow(ReferenceError);
  });

  test('markUndoneAt marks element at given index as undone', () => {
    list.markAllDone();
    list.markUndoneAt(0);

    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(() => list.markUndoneAt(5)).toThrow(ReferenceError);
  });

  test('markAllDone marks all list items as done', () => {
    list.markAllDone();
    let allTodosDone = list.toArray().every(todo => todo.done === true);
    expect(allTodosDone).toBe(true);
  });

  test('removeAt removes item at given index', () => {
    list.removeAt(0);
    expect(list.toArray()).toEqual([todo2, todo3]);
    expect(() => list.removeAt(5)).toThrow(ReferenceError);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns accurate string of which todos are done', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[ ] Go to the gym`;

    list.markDoneAt(0);
    list.markDoneAt(1);

    expect(list.toString()).toBe(string);
  });

  test('toString returns accurate of when all todos are done', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over the elements in list', () => {
    let listCopy = [];
    list.forEach(todo => listCopy.push(todo));

    expect(list.toArray()).toEqual(listCopy);
  });

  test('filter returns new TodoList with filtered items', () => {
    list.markDoneAt(0);
    list.markDoneAt(1);
    let doneTodoList = list.filter(todo => todo.isDone());
    expect(doneTodoList.title).toBe(list.title);
    expect(doneTodoList.toArray()).toEqual([todo1, todo2]);
  });

  test('findByTitle returns todo object with matching title', () => {
    let matchingTodo = list.findByTitle('Buy milk');
    let matchingTodo2 = list.findByTitle('Clean room');

    expect(matchingTodo).toEqual(todo1);
    expect(matchingTodo2).toEqual(todo2);
  });

  test('allDone returns new TodoList with done items', () => {
    list.markDoneAt(0);
    list.markDoneAt(1);

    let newList = new TodoList(list.title);
    newList.add(todo1);
    newList.add(todo2);

    let filteredList = list.filter(todo => todo.isDone());
    expect(newList).toEqual(filteredList);
  });

  test('allNotDone returns new TodoList with undone items', () => {
    let newList = new TodoList(list.title);
    newList.add(todo1);
    newList.add(todo2);
    newList.add(todo3);

    let filteredList = list.filter(todo => !todo.isDone());
    expect(filteredList).toEqual(newList);
  });

  test('findByTitle returns todo by title', () => {
    let foundTodo = list.findByTitle('Buy milk');
    let foundTodo2 = list.findByTitle('Clean room');
    expect(foundTodo).toBe(todo1);
    expect(foundTodo2).toBe(todo2);
  });

  test('markAllUndone marks all todos in list as not done', () => {
    list.forEach(todo => todo.markDone());
    list.markAllUndone();
    let allUndoneTodos = list.filter(todo => !todo.isDone());

    expect(allUndoneTodos.toArray()).toEqual([todo1, todo2, todo3]);
  });
});