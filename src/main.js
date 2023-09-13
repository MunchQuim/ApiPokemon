const POKE_ID_MIN = 1;
const POKE_ID_MAX = 151;
const LINK = "https://pokeapi.co/api/v2/pokemon/";
const IMG_LINK = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const TYPE_LINK = "https://pokeapi.co/api/v2/type/";

const TYPE_ARRAY = ["./img/Tipo_normal_icono_EP.png","./img/Tipo_lucha_icono_EP.png","./img/Tipo_volador_icono_EP.png","./img/Tipo_veneno_icono_EP.png",
"./img/Tipo_tierra_icono_EP.png","./img/Tipo_roca_icono_EP.png","./img/Tipo_bicho_icono_EP.png","./img/Tipo_fantasma_icono_EP.png","./img/Tipo_acero_icono_EP.png",
"./img/Tipo_fuego_icono_EP.png","./img/Tipo_agua_icono_EP.png","./img/Tipo_planta_icono_EP.png","./img/Tipo_eléctrico_icono_EP.png","./img/Tipo_psíquico_icono_EP.png",
"./img/Tipo_hielo_icono_EP.png","./img/Tipo_dragón_icono_EP.png","./img/Tipo_siniestro_icono_EP.png","./img/Tipo_hada_icono_EP.png"];

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
        //obtener la id del tipo//
        const TYPE_RESPONSE = await fetch (DATA.types[index].type.url)
        const DATA_TYPE = await TYPE_RESPONSE.json();
        //------//

        //añade el tipo a la clase//
        POKE_CARD.classList.add(""+DATA.types[index].type.name+"");
        //------// 

        //añade tipos a la carta//              
        let pokeType = document.createElement("img");
        pokeType.setAttribute("src", TYPE_ARRAY[(DATA_TYPE.id)-1]);
        pokeType.setAttribute("alt", "imagen del tipo "+DATA.types[index].type.name);
        pokeType.setAttribute("class","h-4 w-4")
        //------// 
        
        document.getElementById("typeContainer"+id).appendChild(pokeType);
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
        nameDiv.setAttribute("class", "name");
        nameDiv.textContent = "";

        let img = document.createElement("img");
        img.setAttribute("src", "");
        img.setAttribute("alt", "imagen del pokemon");
        img.setAttribute("id", "picture"+index);
        img.setAttribute("class", "item-center self-center");

        let numberDiv = document.createElement("div");
        numberDiv.setAttribute("id", "number"+index);
        numberDiv.setAttribute("class", "num");
        numberDiv.textContent = "";

        let typeContainer = document.createElement("div");
        typeContainer.setAttribute("class","flex");
        typeContainer.setAttribute("id","typeContainer"+index);

        newDiv.appendChild(nameDiv);
        newDiv.appendChild(img);
        newDiv.appendChild(typeContainer);
        typeContainer.appendChild(numberDiv);

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

/* switch (DATA.types[index].type.name) {
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;

        
} */