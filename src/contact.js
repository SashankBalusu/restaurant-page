import './style.css';
const content = document.querySelector("#content")
let head
let number;
function contactUs(){
    head = document.createElement("h1")
    head.textContent = "Contact Us"
    content.appendChild(head)
    number = document.createElement("h2")
    number.textContent = "Our number: (123) 456-7890"
    content.appendChild(number)


}
function remCon() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}
export{contactUs as default, remCon}