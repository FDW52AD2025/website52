// Diseñar una página que contenga un boton y al dar 
// click genere una tabla con la siguiente información



// 1 2 3
// 4 5 6 
// 7 8 9

// usar ciclos  y create element
// item.style.border = "1px solid black";


const boton = document.getElementById("boton");

boton.addEventListener("click", e => {



    let cont = 1;
    const tabla = document.getElementById("tabla");
    
    for(let i = 1; i <= 3; i++){
        const tr = document.createElement("tr");
        for(let e = 1; e <=3; e++){
            const td = document.createElement("td");
            td.innerHTML = cont;
            cont += 1 
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
        tabla.appendChild(tr);


    }

    tabla.style.border = "1px solid black";

})