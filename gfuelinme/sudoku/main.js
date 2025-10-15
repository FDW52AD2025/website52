const boton = document.getElementById("boton")
const tabla = document.getElementById("tabla")

let numeros = [1,2,3,4,5,6,7,8,9]

boton.addEventListener("click", e => {

    let fila = document.createElement("tr")

    for(let i = 0; i < numeros.length; i++){
        const contenido = document.createElement("td")
        contenido.innerText = numeros[i]
        fila.appendChild(contenido)

        if ((i + 1) % 3 == 0) {
            tabla.appendChild(fila)
            fila = document.createElement("tr")
        }
    }
})