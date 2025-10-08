const campoBase = document.getElementById("valor1");
const campoAltura = document.getElementById("valor2");
const campoFigura = document.getElementById("figura");
const campoSalida = document.getElementById("resultado");
const botonCalculo = document.getElementById("boton");

botonCalculo.addEventListener("click", evento => {
    evento.preventDefault();

    const base = parseFloat(campoBase.value);
    const altura = parseFloat(campoAltura.value);
    const figuraElegida = parseInt(campoFigura.value);
    let area = 0;

    switch (figuraElegida) {
        case 1:
            area = (base * altura) / 2;
            break;

        case 2:
            area = base * altura;
            console.log(`Área del rectángulo calculada: ${area}`);
            break;

        case 3:
            area = base * base;
            console.log(`Área del cuadrado obtenida: ${area}`);
            break;

        default:
            area = "Error: figura no válida";
    }

    campoSalida.value = area;
});