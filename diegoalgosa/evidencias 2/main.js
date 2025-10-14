    document.getElementById("boton").addEventListener("click", function() {
      const tabla = document.createElement("tabla");

      let numero = 1;
      for (let i = 0; i < 3; i++) {
        const fila = document.createElement("tr");

      for (let j = 0; j < 3; j++) {
          const celda = document.createElement("td");
          celda.textContent = numero++;
          fila.appendChild(celda);
        }

        tabla.appendChild(fila);
      }

      const contenedor = document.getElementById("contenedor");
      contenedor.innerHTML = ""; 
      contenedor.appendChild(tabla);
    });