
const nameCharacter = document.querySelector("h1");
const imgCharacters = document.querySelector("#img")
const info = document.querySelector("#info")
console.log(info);


const getCharacterImg = async(imgCharacters) => {

try {
const response = await fetch(`https://rickandmortyapi.com/api/character/?img=${imgCharacters}`);
const data = await response.json();
return data;
} catch (error) {
console.log(error);
}
};

const cleanImg = (imgCharacters) => {
  img.innerHTML = "";
}
const init = async () => {
  const img = await imgCharacters();
  //console.log(characters.results);//aqui ya estan en el rreglo
  createImg(img.results)
}

init(imgCharacters);
/*const Img =document.querySelector("img");*/
//console.log(this);
// http://127.0.0.1:5500/personaje.html?id=2
// ?id=2 esto es parámetro

//const img = document.createElement("img");
//console.log("img");

/*img.classList.add("card-img-top", "mt-2");*/



const parametro = window.location.search;
//console.log(parametro); // ?id=2
const urlParams = new URLSearchParams(parametro);
let id= urlParams.get("id");

//console.log("id");


// funcion que hace la peticion del personaje por ID
const getCharacterById = async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = response.json();
      
    
  //console.log(data);
  return data;
  
}

//el llamado a la función
getCharacterById(id).then( data => {
nameCharacter.innerText = data.name
}).catch(err => err);

//peticion al api pero por id


/*const personaje = new Api(name, img, info);
  const resultadoApi = busqueda.consultarApi();
  const informacion = busqueda.mostrarInformacion();
  renderizado(resultadoApi, informacion);
  }

  const renderizado = async (result, info) => {
   const resultado = await result;
//comprobacion que existe la cancion
   if(resultado.personaje) {
const {personaje} = resultado;*/
