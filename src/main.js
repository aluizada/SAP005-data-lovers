import { searchPokemon, sortOrder, filterByType, porcentPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemonData = data.pokemon;

const searchBar = document.querySelector("#searchBar");
const pokemonsList = document.querySelector("#root");

const buttonAZ = document.querySelector("#buttonAZ");
const buttonZA = document.querySelector("#buttonZA");
const buttonCresc = document.querySelector("#buttonCresc");
const buttonDecre = document.querySelector("#buttonDecre");

const card = (num, name, img, type) => {
    let icon = type.map(function(name) {
        const iconName = name.toLowerCase();
        return `<span class="${[iconName]}"></span>`;

    }).join(' ')

    return `<figure class="card-pokemon"><p class="pokemon-num">${num}</p>
    <img src="${img}" alt="Pokémons ${name}">
    <p class="pokemon-type">${icon}</p>
    <figcaption class="pokemon-name">${name}</figcaption>
    </figure>`
};

pokemonData.map(pokemon => pokemonsList.innerHTML += card(pokemon.num, pokemon.name, pokemon.img, pokemon.type));

searchBar.addEventListener("keyup", () => {
    displayPokemons(searchPokemon(searchBar.nodeValue.toLocaleLowerCase(), "name", pokemonData));
    template.innerHTML = " ";
});

const displayPokemons = (pokemon) => {
    const cards = pokemon
        .map((pokemon) => {
            let type = pokemon.type.map(function(name) {
                const iconName = name.toLowerCase();
                return `<span class="${[iconName]}"></span>`
            }).join(' ')

            return `figure class="card-pokemon"><p class="pokemon-num">${pokemon.num}</p>
        <img src="${pokemon.img}" alt="Pokémons ${pokemon.name}">
        <p class="pokemon-type">${type}</p>
        <figcaption class="pokemon-name">${pokemon.name}</figcaption>
        </figure>`;
        })
        .join(' ');
    pokemonsList.innerHTML = cards;
};

buttonAZ.addEventListener("click", () => {
    displayPokemons(sortOrder("az", "name", pokemonData));
    template.innerHTML = " ";
});

buttonZA.addEventListener("click", () => {
    displayPokemons(sortOrder("za", "name", pokemonData));
    template.innerHTML = " ";
});

buttonCresc.addEventListener("click", () => {
    displayPokemons(sortOrder("cresc", "id", pokemonData));
    template.innerHTML = " ";
});

buttonDecre.addEventListener("click", () => {
    displayPokemons(sortOrder("decre", "id", pokemonData));
    template.innerHTML = " ";
});

const buttonSteel = document.querySelector("#buttonSteel");
const buttonWater = document.querySelector("#buttonWater");
const buttonDragon = document.querySelector("#buttonDragon");
const buttonEletric = document.querySelector("#buttonEletric");
const buttonFairy = document.querySelector("#buttonFairy");
const buttonGhost = document.querySelector("#buttonGhost");
const buttonFire = document.querySelector("#buttonFire");
const buttonIce = document.querySelector("#buttonIce");
const buttonBug = document.querySelector("#buttonBug");
const buttonFighting = document.querySelector("#buttonFighting");
const buttonNormal = document.querySelector("#buttonNormal");
const buttonDark = document.querySelector("#buttonDark");
const buttonRock = document.querySelector("#buttonRock");
const buttonGrass = document.querySelector("#buttonGrass");
const buttonPsychic = document.querySelector("#buttonPsychic");
const buttonGround = document.querySelector("#buttonGround");
const buttonPoison = document.querySelector("#buttonPoison");
const buttonFlying = document.querySelector("#buttonFlying");

const template = document.querySelector("#textTypes")

buttonSteel.addEventListener("click", () => {
    const filterSteel = filterByType("Steel", "type", pokemonData);
    displayPokemons(filterSteel);
    const percent = porcentPokemon(filterSteel.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="steel"> Aço </h2>
  <p><span class="num steel">${percent}%</span><p>
</div>`;
});

buttonWater.addEventListener("click", () => {
    const filterWater = filterByType("Water", "type", pokemonData);
    displayPokemons(filterWater);
    const percent = porcentPokemon(filterWater.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="water"> Água </h2>
    <p><span class="num water">${percent}%</span><p>
  </div>`;
});

buttonDragon.addEventListener("click", () => {
    const filterDragon = filterByType("Dragon", "type", pokemonData);
    displayPokemons(filterDragon);
    const percent = porcentPokemon(filterDragon.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="dragon"> Dragão </h2>
    <p><span class="num dragon">${percent}%</span><p>
  </div>`;
});

buttonEletric.addEventListener("click", () => {
    const filterElectric = filterByType("Electric", "type", pokemonData);
    displayPokemons(filterElectric);
    const percent = porcentPokemon(filterElectric.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="electric"> Elétrico </h2>
    <p><span class="num electric">${percent}%</span><p>
  </div>`;
});

buttonFairy.addEventListener("click", () => {
    const filterFairy = filterByType("Fairy", "type", pokemonData);
    displayPokemons(filterFairy);
    const percent = porcentPokemon(filterFairy.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="fairy"> Fada </h2>
    <p><span class="num fairy">${percent}%</span><p>
  </div>`;
});

buttonGhost.addEventListener("click", () => {
    const filterGhost = filterByType("Ghost", "type", pokemonData);
    displayPokemons(filterGhost);
    const percent = porcentPokemon(filterGhost.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="ghost"> Fantasma </h2>
    <p><span class="num ghost">${percent}%</span><p>
  </div>`;
});

buttonFire.addEventListener("click", () => {
    const filterFire = filterByType("Fire", "type", pokemonData);
    displayPokemons(filterFire);
    const percent = porcentPokemon(filterFire.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="fire"> Fogo </h2>
    <p><span class="num fire">${percent}%</span><p>
  </div>`;
});

buttonIce.addEventListener("click", () => {
    const filterIce = filterByType("Ice", "type", pokemonData);
    displayPokemons(filterIce);
    const percent = porcentPokemon(filterIce.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="ice"> Gelo </h2>
    <p><span class="num ice">${percent}%</span><p>
  </div>`;
});

buttonBug.addEventListener("click", () => {
    const filterBug = filterByType("Bug", "type", pokemonData);
    displayPokemons(filterBug);
    const percent = porcentPokemon(filterBug.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="bug"> Inseto </h2>
    <p><span class="num bug">${percent}%</span><p>
  </div>`;
});

buttonFighting.addEventListener("click", () => {
    const filterFighting = filterByType("Fighting", "type", pokemonData);
    displayPokemons(filterFighting);
    const percent = porcentPokemon(filterFighting.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="fighting"> Lutador </h2>
    <p><span class="num fighting">${percent}%</span><p>
  </div>`;
});

buttonNormal.addEventListener("click", () => {
    const filterNormal = filterByType("Normal", "type", pokemonData);
    displayPokemons(filterNormal);
    const percent = porcentPokemon(filterNormal.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
    <h2 class="normal"> Normal </h2> 
    <p><span class="num normal">${percent}%</span><p>
  </div>`;
});

buttonDark.addEventListener("click", () => {
    const filterDark = filterByType("Dark", "type", pokemonData);
    displayPokemons(filterDark);
    const percent = porcentPokemon(filterDark.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
  <h2 class="dark"> Noturno </h2>
  <p><span class="num dark">${percent}%</span><p>
</div>`;
});

buttonRock.addEventListener("click", () => {
    const filterRock = filterByType("Rock", "type", pokemonData);
    displayPokemons(filterRock);
    const percent = porcentPokemon(filterRock.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
  <h2 class="rock"> Pedra </h2>
  <p><span class="num rock">${percent}%</span><p>
</div>`;
});

buttonGrass.addEventListener("click", () => {
    displayPokemons(filterByType("Grass", "type", pokemonData))
    const filterGrass = filterByType("Grass", "type", pokemonData);
    displayPokemons(filterGrass);
    const percent = porcentPokemon(filterGrass.length, pokemonData.length).toFixed(0);
    template.innerHTML =
        `<div>
      <h2 class="grass"> Planta</h2>
      <p><span class="num grass">${percent}%</span><p>
  </div>`;
});

buttonPsychic.addEventListener("click", () => {
    const filterPsychic = filterByType("Psychic", "type", pokemonData);
    displayPokemons(filterPsychic);
    const percent = porcentPokemon(filterPsychic.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
  <h2 class="psychic"> Psíquico </h2>
  <p><span class="num psychic">${percent}%</span><p>
</div>`;
});

buttonGround.addEventListener("click", () => {
    const filterGround = filterByType("Ground", "type", pokemonData);
    displayPokemons(filterGround);
    const percent = porcentPokemon(filterGround.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
  <h2 class="ground"> Terra </h2>
  <p><span class="num ground">${percent}%</span><p>
</div>`;
});

buttonPoison.addEventListener("click", () => {
    const filterPoison = filterByType("Poison", "type", pokemonData);
    displayPokemons(filterPoison);
    const percent = porcentPokemon(filterPoison.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
  <h2 class="poison"> Venenoso </h2>
  <p><span class="num poison">${percent}%</span><p>
</div>`;
});

buttonFlying.addEventListener("click", () => {
    const filterFlying = filterByType("Flying", "type", pokemonData);
    displayPokemons(filterFlying);
    const percent = porcentPokemon(filterFlying.length, pokemonData.length).toFixed(0);
    template.innerHTML = `<div>
  <h2 class="flying"> Voador </h2>
  <p><span class="num flying">${percent}%</span><p>
</div>`;
});