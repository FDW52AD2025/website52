const inputValor1 = document.getElementById("valor1");
const inputValor2 = document.getElementById("valor2");
const comboFigura = document.getElementById("figura");
const inputResultado = document.getElementById("resultado");
const botonCalcular = document.getElementById("calcular");

botonCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    const valor1 = parseInt(inputValor1.value);
    const valor2 = parseInt(inputValor2.value);
    const figura = comboFigura.value;
    let resultado;

    switch (true) {
        case figura === "triangulo":
            resultado = (valor1 * valor2) / 2;
            break;

        case figura === "rectangulo":
            resultado = valor1 * valor2;
            break;

        case figura === "cuadrado":
            resultado = valor1 * valor1;
            break;

        default:
            resultado = "Error";
            alert("Seleccione una figura válida");
            break;
    }

    inputResultado.value = resultado;
});