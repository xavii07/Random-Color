const boton = document.querySelector("#btn")
const color = document.querySelector("#color")
const section = document.querySelector("section")

function random(numero) {
    return Math.floor(Math.random() * numero)
}

function bgChange() {
    const hslColor = `hsl(${random(360)}, ${random(100)}%, ${random(100)}%)`;
    section.style.background = hslColor;
    color.textContent = hslColor + ";";
}

boton.addEventListener("click", bgChange)

const contH2 = document.querySelector("#copyColor")
contH2.addEventListener("click", () => {
    const colorCopiado = document.querySelector("#colorCopiado")
    colorCopiado.classList.add("active")

    setTimeout(() => {
        colorCopiado.classList.remove("active")
    }, 1500)
})


let copy = new ClipboardJS("#copyColor")