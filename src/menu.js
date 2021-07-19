import './style.css';
import burger from "./burger.png"
import alfredo from "./alfredo.jpg"
import pasta from "./pasta.jpg"
import pizza from "./pizza.jpg"
import wings from "./wings.jpeg"
import steak from "./steak.jpeg"
const menuItems = [burger, alfredo, pasta, pizza, wings, steak]
const captions = [
    "Mega onion ring burger",
    "Creamy fettucini alfredo",
    "Rich vodka sauce pasta",
    "Pepperoni pizza with marinara sauce",
    "Classic buffalo sauce wings",
    "Our signature raw steak"
]
const content = document.querySelector("#content")
function menuPage(){
    for (let i = 0; i <menuItems.length; i++){
        let img = document.createElement("img")
        img.src = menuItems[i]
        img.classList.add("menuPics")
        content.appendChild(img)
        let caption = document.createElement("figcaption")
        caption.textContent = captions[i]
        caption.classList.add("captions")
        content.appendChild(caption)
    }
}
function remMenu (){
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}
export {menuPage as default, remMenu}