const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");

let datos = [1,2,3,4,5,6,7,8,9];


boton.addEventListener("click", e => {

    let contador = 0;

    for(let i=0 ; i < 3 ; i++){
        const fila =document.createElement("tr");
    
        for(let j = 0; j < 3; j++){
        const celda = document.createElement("td");
        celda.textContent = datos[contador];
        fila.appendChild(celda);
        contador++;
        }
        tabla.appendChild(fila);
    }

    
});