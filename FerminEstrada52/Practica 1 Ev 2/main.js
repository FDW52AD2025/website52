document.addEventListener('DOMContentLoaded', () => {
    const valor1 = document.getElementById('valor1');
    const valor2 = document.getElementById('valor2');
    const contenedorValor2 = document.getElementById('contenedor-valor2');
    const seleccionFigura = document.getElementById('figura');
    const boton = document.getElementById('calcular');
    const resultado = document.getElementById('resultado');

    seleccionFigura.addEventListener('change', () => {
        const figuraSeleccionada = seleccionFigura.value;
        if (figuraSeleccionada === 'cuadrado') {
            contenedorValor2.style.display = 'none';
        } else {
            contenedorValor2.style.display = 'block';
        }
    });

    boton.addEventListener('click', () => {
        const figura = seleccionFigura.value;
        const v1 = parseFloat(valor1.value);
        const v2 = parseFloat(valor2.value);
        let area = 0;
        let errorMessage = '';

        switch (figura) {
            case 'rectangulo':
                if (isNaN(v1) || isNaN(v2) || v1 <= 0 || v2 <= 0) {
                    errorMessage = 'Ambos valores deben ser positivos.';
                } else {
                    area = v1 * v2;
                }
                break;

            case 'triangulo':
                if (isNaN(v1) || isNaN(v2) || v1 <= 0 || v2 <= 0) {
                    errorMessage = 'La base y la altura deben ser positivas.';
                } else {
                    area = (v1 * v2) / 2;
                }
                break;

            case 'cuadrado':
                if (isNaN(v1) || v1 <= 0) {
                    errorMessage = 'El valor del lado debe ser positivo.';
                } else {
                    area = v1 * v1;
                }
                break;

            default:
                errorMessage = 'Figura no reconocida.';
                break;
        }

        if (errorMessage) {
            resultado.value = errorMessage;
        } else {
            resultado.value = `${area.toFixed(2)}`;
        }
    });
});