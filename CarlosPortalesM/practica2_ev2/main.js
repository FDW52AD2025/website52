const tabla = document.getElementById("tabla");
const boton = document.getElementById("boton");
let numeros = [1,2,3,4,5,6,7,8,9];

boton.style.marginBottom = "20px";

boton.addEventListener("click", e => {
    console.log(numeros);
    let numeroIndice = 0;
    tabla.innerHTML = "";
    for(let j = 0; j < 3; j++){
        const item2 = document.createElement("tr");
        tabla.appendChild(item2)
        for(let i = 0; i < 3; i++){
            const item = document.createElement("td");
            item.innerText = numeros[numeroIndice];
            item.style.border = "1px solid black";
            tabla.appendChild(item);
            numeroIndice++;
        }
    }
});
