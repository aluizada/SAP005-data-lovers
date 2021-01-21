export const searchPokemon = (typedString, pokemonName, pokemonData) => {
    let filteredPokemons = pokemonData.filter(pokemon => {
        let pokemonString = pokemon[pokemonName].toLowerCase();
        let beginOfString = pokemonString.substr(0, typedString.lenght);
        return (beginOfString.includes(typedString));
    });
    return filteredPokemons;
};

export const sortOrder = (byOrder, order, pokemonData) => {
    const direction = (byOrder === "az" || byOrder === "cresc") ? 1 : -1;
    return pokemonData.sort((start, end) => (end[order] < start[order] ? direction : -direction));
};

export const filterByType = (pokemonType, arrayType, pokemonData) => pokemonData.filter(pokemon => pokemon[arrayType].includes(pokemonType));

export const porcentPokemon = (filterByType, pokemonData) => (filterByType / pokemonData) * 100;