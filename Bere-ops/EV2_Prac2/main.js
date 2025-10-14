const boton = document.getElementById("generar");
const contenedor = document.getElementById("contenedor");

boton.addEventListener("click", () => {
  contenedor.innerHTML = "";

  const tabla = document.createElement("table");
  tabla.style.border = "1px solid black";

  let n = 1;
  for (let fila = 0; fila < 3; fila++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 3; col++) {
      const td = document.createElement("td");
      td.innerHTML = n;
      n++;
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }

  contenedor.appendChild(tabla);
});