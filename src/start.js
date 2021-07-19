import './style.css';
import chef from "./chef.jpeg"
const content = document.querySelector("#content")
let name;
let tagline;
let chefImg;

function onStart(){
    name = document.createElement("h1")
    name.textContent = "{restaurant name}"
    content.appendChild(name)
    tagline = document.createElement("h2")
    tagline.textContent = "The best food in the lower south east region of Freeport, Maine"
    content.appendChild(tagline);
    chefImg = document.createElement("img")
    chefImg.src = chef
    chefImg.id = "homeImg"
    content.appendChild(chefImg)

}
function remHome(){
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
}
export {onStart as default, remHome};


