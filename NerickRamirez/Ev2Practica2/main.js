const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");

boton.addEventListener("click", () => {
    tabla.innerHTML = "";

    let numero = 1;

    for (let fila = 0; fila < 3; fila++) {
        const tr = document.createElement("tr");

        for (let col = 0; col < 3; col++) {
            const td = document.createElement("td");
            td.innerText = numero;
            tr.appendChild(td);
            numero++;
        }

        tabla.appendChild(tr);
    }
});
