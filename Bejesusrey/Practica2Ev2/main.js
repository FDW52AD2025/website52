let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const boton = document.getElementById("boton");
const table = document.getElementById("table");

boton.addEventListener("click", e => {

    let numbers = 0;
    table.innerHTML = "";
    for(let i = 0; i < 3; i++){
        const item1 = document.createElement("tr");
        table.appendChild(item1);
        for(let i = 0;  i < 3; i++){
            const item2 = document.createElement("td");
            item2.innerText = numero[numbers];
            table.appendChild(item2);
            item2.style.border = "1px solid black";
            numbers++;
        }
        table.style.border = "1px solid black";
    }

})