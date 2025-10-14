const inputNum1 = document.getElementById("Num1");
const inputNum2 = document.getElementById("Num2");
const inputFigura = document.getElementById("figura")
const botonResultado = document.getElementById("boton")
const inputResultado = document.getElementById("inputResultado")

botonResultado.addEventListener('click', e => {
    e.preventDefault();

    let Num1 = parseFloat(inputNum1.value);
    let Num2 = parseFloat(inputNum2.value);
    let opcion = parseInt(inputFigura.value);
    let resul = parseFloat(inputResultado.value);

    switch(opcion) {

        case 1:
            resul = Num1 * Num2
            break;
        case 2:
            resul = (Num1 * Num2)/2 
            break;
        case 3:
            resul = Num1 * Num2
            break;
    }
    inputResultado.value = resul
});
