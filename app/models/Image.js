export default class Image {
  constructor(data) {
    this.id = data._id || data.id
    this.url = data.large_url || data.url
  }
}