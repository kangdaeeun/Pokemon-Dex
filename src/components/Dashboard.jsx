import React from "react";

export default function Dashboard({selectedPokemons, removePokemon}) {
    return (
        <div>
            <h2>Selected Pokemons!</h2>
            {selectedPokemons.map((pokemon) => {
                return (
                    <div key={pokemon.id}>
                        <img src={pokemon.img_url} alt={pokemon.korean_name} />
                        <h3>{pokemon.korean_name}</h3>
                        <button onClick={() => removePokemon(pokemon.id)} >삭제</button>
                    </div>
                )
            })}
        </div>
    )
}