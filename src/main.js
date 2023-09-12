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

    const RESPUESTA = await fetch (LINK+id)
    const DATA = await RESPUESTA.json();
    POKE_NAME.innerText = DATA.forms[0].name;
    POKE_PICTURE.src = DATA.sprites.front_default;
    POKE_NUM.innerText = DATA.id;
}
//---------------------------------//

//crea las cartas//
async function makeCards (){
    for (let index = POKE_ID_MIN; index <= POKE_ID_MAX; index++) { 
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "flex flex-col h-40 justify-between bg-orange-400 rounded p-2 m-2");

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

//estandarizacion tamañano, cutre//

//---------------------------------//