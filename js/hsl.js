const boton = document.querySelector("#btn")
const color = document.querySelector("#color")
const section = document.querySelector("section")

function random(numero) {
    return Math.floor(Math.random() * numero)
}

function bgChange() {
    const bgaColor = `hsl(${random(360)}, ${random(100)}%, ${random(100)}%)`
    section.style.background = bgaColor;
    color.textContent = bgaColor
}

boton.addEventListener("click", bgChange)