const inputValor1 = document.getElementById("v1");
const inputValor2 = document.getElementById("v2");
const inputfigura = document.getElementById("figura");
const inputResultado = document.getElementById("resultado");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();

    let v1 = parseInt(inputValor1.value);
    let v2 = parseInt(inputValor2.value);
    let figura = (inputfigura.value);
    let resultado;

    switch (figura) {
        
        case "triangulo":
            resultado = v1 * v2 / 2;
        break;

        case "rectangulo":
            resultado = v1 * v2;
        break;

        case "cuadrado":
            resultado = v1 * v1;
        break;
    }

        inputResultado.value = resultado;
});