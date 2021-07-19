import './style.css';
const content = document.querySelector("#content")
function contactUs(){
    let head = document.createElement("h1")
    head.textContent = "Contact Us"
    content.appendChild(head)
    
    const location = document.createElement("iframe")
    location.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.259014345456!2d-121.82772658473827!3d37.28899467985075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e326f0534c5e7%3A0x7ecc57116168e3fe!2sKingdom%20Hall%20of%20Jehovah's%20Witnesses!5e0!3m2!1sen!2sus!4v1626731848003!5m2!1sen!2sus"
    location.width = "600"
    location.height = "450"
    location.setAttribute("style", "border:0;")
    location.setAttribute('allowFullScreen', '')
    location.loading = "lazy"
    content.appendChild(location)
    let number = document.createElement("h2")
    number.textContent = "Our number: (123) 456-7890"
    content.appendChild(number);
    let address = document.createElement("h2")
    address.textContent = "Our address: 3588 Bayou Dr, San Jose, CA 95111"
    content.appendChild(address)
}
function remCon() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}
export{contactUs as default, remCon}