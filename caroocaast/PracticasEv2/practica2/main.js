const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla")

let numeros =[ 1,2,3,4,5,6,7,8,9];


boton.addEventListener("click", e =>{
    let renglon;
    for (let i = 0; i< numeros.length; i++){
        if(i % 3 ===0){
            renglon = document.createElement("tr");
            tabla.appendChild(renglon);
        }
        const celda = document.createElement("td")
        celda.innerText=numeros[i];
        renglon.appendChild(celda);
    }

});