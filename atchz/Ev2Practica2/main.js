const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

boton.addEventListener("click", (e) => {
    let renglon;

    for (let index = 0; index < numeros.length; index++) {
        if (index % 3 == 0) {
            renglon = document.createElement("tr");
            tabla.appendChild(renglon);
        }

        const celda = document.createElement("td");
        celda.innerText = numeros[index];
        renglon.appendChild(celda);
    }

    boton.disabled = true;
});
