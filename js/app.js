const boton = document.querySelector("#btn")
const color = document.querySelector("#color")
const section = document.querySelector("section")

function random(numero) {
    return Math.floor(Math.random() * numero)
}

function bgChange() {
    const bgaColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
    section.style.background = bgaColor;
    color.textContent = bgaColor
}

boton.addEventListener("click", bgChange)