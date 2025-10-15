const inputNum1 = document.getElementById("txtNum1");
const inputNum2 = document.getElementById("txtNum2");
const inputResp = document.getElementById("txtResp");
const inputFig = document.getElementById("cmbFig");

document.getElementById("btnResp").addEventListener("click", e => {
    e.preventDefault();
    let Num1 = parseFloat(inputNum1.value);
    let Num2 = parseFloat(inputNum2.value);
    let Fig = inputFig.value;
    let Resp;

    switch (Fig) {
        case "Triangulo":
            Resp = (Num1 * Num2) / 2;
            break;
        case "Rectangulo":
            Resp = Num1 * Num2;
            break;
        case "Cuadrado":
            Resp = Num1 * Num1;
            break;
    };

    inputResp.value = Resp;
});