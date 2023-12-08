/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  #todoArray = [];

  add(todo) {
    this.#todoArray.push(todo);
  }

  remove(indexOfTodo) {
    this.#todoArray = this.#todoArray.filter(
      (todo, index) => index != indexOfTodo
    );
  }

  update(index, updateTodo) {
    this.#todoArray = this.#todoArray.map((todo, todoIndex) => {
      if (todoIndex == index) {
        return updateTodo;
      }
      return todo;
    });
  }

  getAll() {
    return this.#todoArray;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.#todoArray.length) {
      return this.#todoArray[indexOfTodo];
    }
    return null;
  }
  clear() {
    this.#todoArray = [];
  }
}

module.exports = Todo;
