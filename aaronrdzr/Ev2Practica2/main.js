const boton= document.getElementById("boton");
const tabla= document.getElementById("tabla");

let n1 = [1,2,3];
let n2 = [4,5,6];
let n3 = [7,8,9];

boton.addEventListener("click", e => {
    

    const tr1 = document.createElement("tr");
   for(let i = 0; i<n1.length; i++){
        console.log(n1[i]);
        const item= document.createElement("td");
        item.innerText= n1 [i]; 
        item.style.border = "3px solid black";
        tr1.appendChild(item);
    }
    tabla.appendChild(tr1);
    const tr2 = document.createElement("tr"); 
    for(let i = 0; i<n2.length; i++){
        console.log(n2[i]);
        const item= document.createElement("td");
        item.innerText= n2 [i]; 
         item.style.border = "3px solid black";
        tr2.appendChild(item);
    }
    tabla.appendChild(tr2);
    const tr3 = document.createElement("tr");  
    for(let i = 0; i<n3.length; i++){
        console.log(n3[i]);
        const item= document.createElement("td");
        item.innerText= n3 [i]; 
        item.style.border = "3px solid black";
        tr3.appendChild(item);
    }
    tabla.appendChild(tr3); 


})