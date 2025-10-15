function sudoku() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    function generarsudoku() {
        let tabla = document.createElement("table");
        let numero = 1;

        for (let i = 0; i < 3; i++) {
            let fila = document.createElement("tr");

            for (let i = 0; i < 3; i++) {
                let celda = document.createElement("td");
                celda.textContent = numero;
                fila.appendChild(celda)
                numero++;
            }
            tabla.appendChild(fila);
        }
        contenedor.appendChild(tabla);
    }
    generarsudoku()
}