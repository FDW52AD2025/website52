function calcular() {
  const v1 = parseFloat(document.getElementById("v1").value);
  const v2 = parseFloat(document.getElementById("v2").value);
  const figura = document.getElementById("fig").value;
  const resultado = document.getElementById("resultado");

  let area = 0;

  switch (figura) {
    case "triangulo":
      area = (v1 * v2) / 2;
      break;
    case "rectangulo":
      area = v1 * v2;
      break;
    case "cuadrado":
      area = v1 * v1;
      break;
    default:
      area = "Figura no válida";
  }

  resultado.value = area;
}