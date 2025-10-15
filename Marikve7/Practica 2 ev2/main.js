const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");

let numeros = 1;

boton.addEventListener("click", e => {
    for(let x=1; x<=3; x++){
        console.log(x);
        const filas = document.createElement("tr");
        tabla.appendChild(filas)

        for(let y=1; y<=3; y++){
            const column = document.createElement("td")
            column.innerText = numeros;
            column.style.border = '1px solid black';
            filas.appendChild(column)
            numeros++
        }
    }

})