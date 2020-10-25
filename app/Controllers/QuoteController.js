import { ProxyState } from "../AppState.js"
import quoteService from "../Services/QuoteService.js"


function _drawQuote() {
  document.getElementById('quote').innerHTML = ProxyState.quote.Template
}
export default class QuoteController {
  constructor() {
    console.log("hello from quote controller")
    this.getQuote()
    ProxyState.on("quote", _drawQuote)
  }


  getQuote() {
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error);
    }
  }

}