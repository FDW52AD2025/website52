/* diseñar una app para el calculo de figuras de: rectangulo, triangulo y cuadrado.
Utilizar en su codigo la estructura switch
1 area triangulo: base x altura / 2
2 area rectangulo: base x altura
3 area cuadrado: lado x lado
-  variables : valor1, valor 2 */


// obtener las referencias de los controles
const inputValor1= document.getElementById("valor1");
const inputValor2 = document.getElementById("valor2");
const inputResultado = document.getElementById("resultado")
const boton = document.getElementById("boton");
const comboFigura = document.getElementById("figura");

boton.addEventListener("click", e => {
    e.preventDefault();

    //variables
    let valor1 = parseInt(inputValor1.value);
    let valor2 = parseInt(inputValor2.value);
    let figura = parseInt(comboFigura.value);
    let resultado = parseInt(0)

    switch (figura) {
        case 1: // triangulo
            resultado = (valor1 * valor2) / 2;
            break;
        case 2: // rectangulo
            resultado = valor1 * valor2
            break;
        case 3: // cuadrado
            resultado = valor1 * valor1
            break;
    }

    inputResultado.value = resultado;
});