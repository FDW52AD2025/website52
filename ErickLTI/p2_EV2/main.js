const btn = document.getElementById("mostrar");
const tabla = document.getElementById("tabla");

let valores = [1,2,3,4,5,6,7,8,9];

btn.addEventListener("click", () => {
    tabla.innerHTML = "";
    let pos = 0;

    for (let fila = 0; fila < 3; fila++) {
        let nuevaFila = document.createElement("tr");

        for (let col = 0; col < 3; col++) {
            let celda = document.createElement("td");
            celda.textContent = valores[pos];
            nuevaFila.appendChild(celda);
            pos++;
        }

        tabla.appendChild(nuevaFila);
    }
});