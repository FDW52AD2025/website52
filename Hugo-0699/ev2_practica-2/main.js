const tabla = document.getElementById("tabla")
const boton = document.getElementById("boton")

let datos = [1,2,3,4,5,6,7,8,9]
boton.addEventListener("click", e => {
    tabla.innerHTML = "";
    let contador = 0;

    //filas
    for(let fila = 0; fila < 3; fila ++){
        const tfila = document.createElement("tr");

        //celdas
        for(let celda = 0; celda < 3; celda ++){
            const td = document.createElement("td");
            td.innerText = datos[contador]; 
            td.style.border = "3px solid black";
            contador +=1;
            tfila.appendChild(td);
        }

        tabla.appendChild(tfila)
    }
});