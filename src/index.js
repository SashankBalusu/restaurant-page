import onStart, {remHome} from "./start.js"
import contactUs, {remCon} from "./contact.js"
import menuPage, {remMenu} from "./menu.js"
let curPage = "home"
const body = document.querySelector("body")
const header = document.createElement("header")
const home = document.createElement("button")
home.textContent = "home"
const menu = document.createElement("button")
menu.textContent = "menu"
body.insertBefore(header, body.firstChild)
const contact = document.createElement("button")
contact.textContent = "contact"
contact.id = "contact"
const name = document.createElement("h1")
name.textContent = "El Restaurante"
name.id = "name"
const nav = document.createElement("nav")
header.appendChild(name)
header.appendChild(nav)
nav.appendChild(home)
nav.appendChild(contact)
nav.appendChild(menu)
onStart();
home.addEventListener("click", function(){
    home.setAttribute("style", "border-bottom: solid")
    menu.setAttribute("style", "border-bottom: none")
    contact.setAttribute("style", "border-bottom: none")
    if (curPage == "home"){
        return;
    }
    else if (curPage == "contact"){
        remCon();
        onStart();
    }
    else {
        remMenu()
        onStart()
    }
    curPage = "home";
})
contact.addEventListener("click", function(){
    home.setAttribute("style", "border-bottom: none")
    menu.setAttribute("style", "border-bottom: none")
    contact.setAttribute("style", "border-bottom: solid")
    if (curPage == "home"){
        remHome();
        contactUs();
    }
    else if (curPage == "contact"){
        return;
    }
    else {
        remMenu()
        contactUs();
    }
    curPage = "contact";
})
menu.addEventListener("click", function(){
    home.setAttribute("style", "border-bottom: none")
    menu.setAttribute("style", "border-bottom: solid")
    contact.setAttribute("style", "border-bottom: none")
    if (curPage == "home"){
        remHome();
        menuPage();
    }
    else if (curPage == "contact"){
        remCon();
        menuPage();
    }
    else {
        return;
    }
    curPage = "menu";
})