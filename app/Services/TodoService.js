import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";

let url = 'Tom/todos/'


class TodoService {
  constructor() {
  }
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(t => new Todo(t))
    console.log(ProxyState.todos)
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    this.getTodos()
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);

    if (todo.completed == false) {
      todo.completed = true
    } else {
      todo.completed = false
    }

    let res = await api.put(url + todoId, todo);
    this.getTodos()
  }

  async removeTodo(todoId) {
    let res = await api.delete(url + todoId)
    ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)
  }
}

const todoService = new TodoService();
export default todoService;