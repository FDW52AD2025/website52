const contenedor = document.getElementById("table-div");
const boton = document.getElementById("boton");

let numeros = 1; 
const generarCuadricula = () => {

    const tbody = document.createElement("tbody");

    for (let i = 0; i < 3; i++) {
        const fila = document.createElement("tr"); 
        for (let j = 0; j < 3; j++) {
            const celda = document.createElement("td");


            celda.textContent = numeros++; 
            
            fila.appendChild(celda);
        }

        tbody.appendChild(fila);
    }

    table.appendChild(tbody);
    
    contenedor.innerHTML = ''; 
    contenedor.appendChild(table);
}

boton.addEventListener("click", generarCuadricula);

