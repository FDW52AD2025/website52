const Val1 = document.getElementById("num1");
const Val2 = document.getElementById("num2");
const ComboFig = document.getElementById("figura");
const Resultado = document.getElementById("resultado");
const Boton = document.getElementById("calcular");

Boton.addEventListener("click", e => {
    e.preventDefault();

    let n1 = parseInt(Val1.value);
    let n2 = parseInt(Val2.value);
    let fig = parseInt(ComboFig.value);
    let res = parseInt(Resultado);

    switch (fig){
        case 1:
            res = (n1 * n2)/2;
            break;
        case 2:
            res= n1 * n2;
            break;
        case 3:
            res= n1 * n1;
            break;
    }
    resultado.value = res;
});
