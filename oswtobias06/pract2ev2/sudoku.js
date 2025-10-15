const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");

let numeros = [1,2,3,4,5,6,7,8,9,10]
boton.addEventListener("click", e => {

tabla.style.border = "1px solid black"
let num_i = 0;
    for(let i=1; i<4; i++){
        const renglon = document.createElement("tr");
        for(let i=1; i<4; i++){
            const celda = document.createElement("td")
            celda.innerText = numeros[num_i];
            celda.style.border = "1px solid black"
            renglon.appendChild(celda);
            num_i++
        }
        tabla.appendChild(renglon);
    }
});