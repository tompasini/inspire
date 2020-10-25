import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
import ImageController from "./Controllers/ImageController.js"
import QuoteController from "./Controllers/QuoteController.js"



class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.imageController = new ImageController();
    this.quoteController = new QuoteController();
  }
}


window["app"] = new App();