const Boton = document.getElementById("Boton");
const Tabla = document.getElementById("Tabla");

Boton.addEventListener("click", function() {
    Tabla.innerHTML = ""; 

    let i = 1;
    while (i <= 9) {
        const fila = document.createElement("tr");

        let j = 0; 
        while (j < 3 && i <= 9) {
            const celda = document.createElement("td");
            celda.textContent = i;
            fila.appendChild(celda);
            i++;
            j++;
        }

        Tabla.appendChild(fila);
    }
});


