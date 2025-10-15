const boton = document.getElementById ("boton");
const tabla = document.getElementById ("tabla");

boton.addEventListener("click", e => {
    let conten = 1;
    
    for(let i = 0; i<=3; i++){
        const filas = document.createElement("tr");
        
        for( let i=0; i<=3; i++){
            const columnas = document.createElement("td");
            columnas.textContent = conten++;
            filas.appendChild(columnas)
            columnas.style.border= "2px solid black"
            columnas.style.backgroundColor= "lightblue"
        }
        tabla.appendChild(filas)
        
    }
})
