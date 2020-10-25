export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return /*html*/ `
    <p class = "font-weight-bold font-weight-italic">${this.quote}</p>
    <p class = "font-weight-bold font-weight-italic">-${this.author}</p>
    `
  }
}