import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"



function _drawImage() {
  document.body.style.backgroundImage = `url('${ProxyState.image.url}')`
  document.body.style.backgroundRepeat = "no-repeat"
  document.getElementById("my-body").style.backgroundSize = "cover"
}
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {

  constructor() {
    console.log("hello from image controller")
    this.getImage()
    ProxyState.on("image", _drawImage)
  }

  getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }
}