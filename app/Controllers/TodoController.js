import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ''
  ProxyState.todos.forEach(t => template += t.Template)
  let count = 0
  ProxyState.todos.forEach(t => {
    if (t.completed == false) {
      count++
    }
  })
  document.getElementById('todo-list').innerHTML = template
  document.getElementById('task-count').innerHTML = count.toString()
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    todoService.getTodos();
    ProxyState.on("todos", _drawTodos)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    //TODO build the todo object from the data that comes into this method
    let todo = {
      description: form.description.value
    }
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    console.log("button is working")
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}