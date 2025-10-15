const BtnBuscar = document.getElementById("BtnBuscar");
const InputNombre = document.getElementById("Nombre");
const ID = document.getElementById("ID");
const Imagen = document.getElementById("Img");
const ListaHabilidades = document.getElementById("ListaHabilidades");
const ListaJuegos = document.getElementById("ListaJuegos");

async function buscarpokemon(){
   const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + InputNombre.value);
   const infoPokemon = await respuesta.json();
   console.log(infoPokemon.id);

   // Poner el id en el parrafo llamado id
   ID.innerText = infoPokemon.id;

    // Mostrar img
   Imagen.src = infoPokemon.sprites.other.home.front_default;

    //Mostrar habilidades
    ListaHabilidades.innerHTML= "";
    infoPokemon.abilities.forEach( a => {
        const item = document.createElement("li");
        item.innerText = a.ability.name;
        ListaHabilidades.appendChild(item);
    });

    // Mostrar Juegos
    ListaJuegos.innerHTML = ""; 

    infoPokemon.game_indices.forEach(game => { 
    const item = document.createElement("li");
    item.innerText = game.version.name; 
    ListaJuegos.appendChild(item); 
});

}

BtnBuscar.addEventListener("click", e =>{
    e.preventDefault();
    buscarpokemon();

})