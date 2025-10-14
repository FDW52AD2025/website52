const boton = document.getElementById("boton"); 
const tabla = document.getElementById("tabla");

let sudoku = [1, 2, 3, 4, 5, 6, 7, 8, 9];

boton.addEventListener("click", e => {
    tabla.innerHTML = ""; 
    
    for (let i = 0; i < sudoku.length; i += 3) {
        const row = document.createElement("tr");
        for (let j = i; j < i + 3; j++) {
            const celda = document.createElement("td");
            celda.innerText = sudoku[j];
            row.appendChild(celda); 
        }
        tabla.appendChild(row); 
    }

    tabla.setAttribute("border", "1");
});
