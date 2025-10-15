let numeros = [1,2,3,4,5,6,7,8,9]

const boton = document.getElementById("boton")
const tabla = document.getElementById("tabla")

boton.addEventListener("click", e =>{
    tabla.innerText="";
    let contador = 0;
    for(let i=0; i<3; i++){
        const fila = document.createElement("tr");
    for(let j=0; j<3; j++){
        const item = document.createElement("td");
        item.innerText = numeros[contador];
        fila.appendChild(item);
        contador++;
    }
    tabla.appendChild(fila)
    }
});