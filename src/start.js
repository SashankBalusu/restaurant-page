import './style.css';
import chef from "./chef.jpeg"
const content = document.querySelector("#content")

function onStart(){
    let chefImg = document.createElement("img")
    chefImg.src = chef
    chefImg.id = "homeImg"
    content.appendChild(chefImg)
    let tagline = document.createElement("h2")
    tagline.textContent = "The best food in the lower south east region of San Jose, California"
    content.appendChild(tagline);
    let tag = document.createElement("h2")
    tag.textContent = "Made with pride since 500 B.C."
    content.appendChild(tag)

}
function remHome(){
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
}
export {onStart as default, remHome};


