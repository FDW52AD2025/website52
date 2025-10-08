document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("calculadora");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const valor1 = parseFloat(document.getElementById("valor1").value);
        const valor2 = parseFloat(document.getElementById("valor2").value);
        const figura = document.getElementById("Figuras").value;
        let area;

        
        if (isNaN(valor1) || (figura !== "Cuadrado" && isNaN(valor2))) {
            document.getElementById("Resultado").value = "Introduce valores válidos";
            return;
        }

       
        switch (figura) {
            case "Triangulo":
                area = (valor1 * valor2) / 2;
                break;
            case "Cuadrado":
                area = valor1 * valor1;
                break;
            case "Rectangulo":
                area = valor1 * valor2;
                break;
            default:
                area = "Figura no válida";
        }

        
        document.getElementById("Resultado").value = area;
    });
});
