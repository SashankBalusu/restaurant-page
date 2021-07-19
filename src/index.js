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
header.appendChild(home)
header.appendChild(contact)
header.appendChild(menu)
onStart();
home.addEventListener("click", function(){
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