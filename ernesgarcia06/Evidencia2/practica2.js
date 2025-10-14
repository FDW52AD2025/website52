const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");

boton.addEventListener("click", e => {
    let cont = 1;

    for (let i = 0; i < 3; i++){
        const renglon = document.createElement("tr");

        for(let i = 0; i < 3 ; i++){
            const celda = document.createElement("td");
            celda.innerText = cont++;
            renglon.appendChild(celda);
            celda.style.border = "1px solid black"
        }
        tabla.appendChild(renglon)
    }
    tabla.style.border = "1px solid black"
    tabla.style.margin = "20px"
});