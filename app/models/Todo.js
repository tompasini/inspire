export default class Todo {
  constructor(data) {
    this.id = data._id || data.id
    this.description = data.description
    this.completed = data.completed
  }


  get Template() {

    // TODO Turn complete into checkbox that is checked when complete, and not checked when incomplete.

    // if (this.completed == false) {
    //   return /*html*/`
    //   <li>${this.description}</li> <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.todoController.toggleTodoStatus('${this.id}')"class="btn btn-success"/> <button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-danger">Delete</button>
    //   `
    // }


    return /*html*/`
    <li>${this.description} <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.todoController.toggleTodoStatus('${this.id}')"/></li>  <button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-danger">Delete</button>
    `
  }
}