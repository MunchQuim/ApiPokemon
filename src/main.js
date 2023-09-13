const POKE_ID_MIN = 1;
const POKE_ID_MAX = 151;
const LINK = "https://pokeapi.co/api/v2/pokemon/";
const IMG_LINK = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"



makeCards ();
//rellena las cartas//
async function getPokemon (id){
    const POKE_NAME = document.getElementById("name"+id);
    const POKE_PICTURE = document.getElementById("picture"+id);
    const POKE_NUM = document.getElementById("number"+id);
    const POKE_CARD = document.getElementById("card"+id);

    const RESPUESTA = await fetch (LINK+id)
    const DATA = await RESPUESTA.json();
    POKE_NAME.innerText = DATA.forms[0].name;
    POKE_PICTURE.src = DATA.sprites.front_default;
    POKE_NUM.innerText = DATA.id;
    
    //añade los tipos como class//
    for (let index = 0; index < DATA.types.length; index++) {
        POKE_CARD.classList.add(""+DATA.types[index].type.name+"");    
    }
    
}
//---------------------------------//

//crea las cartas//
async function makeCards (){
    for (let index = POKE_ID_MIN; index <= POKE_ID_MAX; index++) { 

        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "flex flex-col h-40 justify-between bg-orange-400 rounded p-2 m-2");
        newDiv.setAttribute("id", "card"+index)

        let nameDiv = document.createElement("div");
        nameDiv.setAttribute("id", "name"+index);
        nameDiv.setAttribute("class", "h-4 text-center");
        nameDiv.textContent = "";

        let img = document.createElement("img");
        img.setAttribute("src", "");
        img.setAttribute("alt", "imagen del pokemon");
        img.setAttribute("id", "picture"+index);
        img.setAttribute("class", "item-center self-center");

        let numberDiv = document.createElement("div");
        numberDiv.setAttribute("id", "number"+index);
        numberDiv.setAttribute("class", "h-4 text-right");
        numberDiv.textContent = "";

        newDiv.appendChild(nameDiv);
        newDiv.appendChild(img);
        newDiv.appendChild(numberDiv);

        document.getElementById("card_container").appendChild(newDiv);

        await getPokemon(index);
        
    }
}
//---------------------------------//

//evento de busqueda//
function search() {
    const searchTerm = document.getElementById("browser").value.toLowerCase(); // Obtén el valor del input de búsqueda en minúsculas
    
    for (let index = POKE_ID_MIN; index <= POKE_ID_MAX; index++) {
        const card = document.getElementById("card" + index);
        const cardName = document.getElementById("name" + index).textContent.toLowerCase();

        // Comprueba si el nombre de la tarjeta contiene el término de búsqueda
        if (cardName.includes(searchTerm)) {
            card.style.display = "flex"; // Muestra la tarjeta si coincide con la búsqueda
        } else {
            card.style.display = "none"; // Oculta la tarjeta si no coincide con la búsqueda
        }
    }
}
//---------------------------------//