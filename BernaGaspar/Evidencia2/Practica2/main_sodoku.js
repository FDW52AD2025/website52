const Boton = document.getElementById("Btn");
const Div = document.getElementById("Div");

Boton.addEventListener("click", e => {
    const Tabla = document.createElement("table");
    const Fila1 = document.createElement("tr");

    for (let i = 1; i < 4; i ++) {
        const Elemento = document.createElement("td");
        Elemento.innerText = i;
        Fila1.appendChild(Elemento);
    };
    Tabla.appendChild(Fila1);

    const Fila2 = document.createElement("tr");
    for (let i = 4; i < 7; i ++) {
        const Elemento = document.createElement("td");
        Elemento.innerText = i;
        Fila2.appendChild(Elemento);
    };
    Tabla.appendChild(Fila2);

    const Fila3 = document.createElement("tr");
    for (let i = 7; i < 10; i ++) {
        const Elemento = document.createElement("td");
        Elemento.innerText = i;
        Fila3.appendChild(Elemento);
    };
    Tabla.appendChild(Fila3);
    
    Div.appendChild(Tabla);
});