const inputvalor1 = document.getElementById ("valor 1");
const inputvalor2 = document.getElementById ("valor 2");
const inputresultado = document.getElementById ("resultado");
const boton = document.getElementById ("boton");
const comboFig = document.getElementById ("figura");

boton.addEventListener("click", e => {
    e.preventDefault();
    let valor1 = parseFloat (inputvalor1.value);
    let valor2 = parseFloat (inputvalor2.value);
    let figura = parseInt (comboFig.value);
    let resultado;

    switch (figura) {
        case "1":
            resultado = (valor1 * valor2/2);
            break;
            case "2":
                resultado = (valor1 *valor2); console.log(`El área del rectángulo es ${resultado}`);
                break;
                case "3":
                    resultado = (valor1*valor1); console.log(`El área del cuadrado es ${resultado}`);
                    break;
    }
    inputresultado.value= resultado;
    });