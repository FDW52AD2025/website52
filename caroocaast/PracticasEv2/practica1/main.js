const inputnum1 =document.getElementById("num1");
const inputnum2 =document.getElementById("num2");
const inputResultado =document.getElementById("resultado");
const combofigura =document.getElementById("figura");
const boton =document.getElementById("boton");


boton.addEventListener("click",e=> {
     e.preventDefault();
     
     let num1 =parseInt(inputnum1.value);
     let num2 =parseInt(inputnum2.value);
     let figura = parseInt(combofigura.value);
     let Resultado;
     switch (figura) {
        case 1:
            resultado = (num1 * num2) /2;

            break;
         case 2:
             resultado = num1 * num2;

            break;
         case 3:
             resultado = num1 * num1;

            break;
     }

    inputResultado.value = resultado;

});