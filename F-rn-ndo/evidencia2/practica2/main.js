const boton = document.getElementById("boton");
const contenedorTabla = document.getElementById("contenedorTabla");

boton.addEventListener("click", e => {
    const tabla = document.createElement("tabla");
    let numero = 1;
    const filas = 3;
    const columnas = 3;

    for(let i = 0; i < filas; i++){
        const fila = document.createElement("tr");
        for(let j = 0; j < columnas; j++){
            const celda = document.createElement("td");
            celda.style.border = "1px solid black"; 
            celda.innerText = numero;
            numero++;

            fila.appendChild(celda);
        }   
        tabla.appendChild(fila);
    }
    contenedorTabla.appendChild(tabla);
});