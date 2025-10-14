const inputv1 = document.getElementById("valor1");
const inputv2 = document.getElementById("valor2");
const inputresultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btncalcular");
const inputoperacionFig = document.getElementById("figura")

btnCalcular.addEventListener("click", e =>{
    e.preventDefault();

    let v1 = parseInt(inputv1.value);
    let v2 = parseInt(inputv2.value);
    let figura = inputoperacionFig.value;
    let resultado;

    switch (figura) {
        case "1":
            resultado = v1 * v2 / 2
            break;
        case "2":
            resultado = v1 * v2
            break;
        case "3":
            resultado = v1 * v1
            break;
    }
    
    inputresultado.value = resultado;
});