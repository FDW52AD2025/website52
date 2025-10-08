const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const figura = document.getElementById('figura');
const resultado = document.getElementById('resultado');
const boton = document.getElementById('calculadora');

boton.addEventListener('click', function(event) {
    event.preventDefault();
    calcularArea();
});

function calcularArea() {
    const v1 = parseFloat(valor1.value);
    const v2 = parseFloat(valor2.value);
    
    const figuraSeleccionada = figura.value;
    
    let area = 0;
    
    if (isNaN(v1) || isNaN(v2)) {
        resultado.value = "Por favor ingresa valores numéricos válidos.";
        return;
    }
    
    switch(figuraSeleccionada) {
        case 'cuadrado':
            area = v1 * v1;
            resultado.value = "Área del cuadrado: " + area;
            break;
            
        case 'rectangulo':
            area = v1 * v2;
            resultado.value = "Área del rectángulo: " + area;
            break;
            
        case 'triangulo':
            area = (v1 * v2) / 2;
            resultado.value = "Área del triángulo: " + area;
            break;
            
        default:
            resultado.value = "Figura no válida.";
    }
}