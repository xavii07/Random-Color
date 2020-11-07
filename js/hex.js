const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const boton = document.querySelector("#btn")
const color = document.querySelector("#color")
const section = document.querySelector("section")

boton.addEventListener("click", () => {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor + ";";
    section.style.background = hexColor
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

const contH2 = document.querySelector("#copyColor")
contH2.addEventListener("click", () => {
    const colorCopiado = document.querySelector("#colorCopiado")
    colorCopiado.classList.add("active")

    setTimeout(() => {
        colorCopiado.classList.remove("active")
    }, 1500)
})


let copy = new ClipboardJS("#copyColor")