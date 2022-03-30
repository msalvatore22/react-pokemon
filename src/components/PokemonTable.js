import React from "react";
import PokemonRow from "./PokemonRow";

const PokemonTable = ({ pokemon, filter, selectedPokemonSet }) => (
  <table width="100%">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {pokemon
        .filter((pokemon) =>
          pokemon.name.english.toLowerCase().includes(filter)
        )
        .slice(0, 20)
        .map((pokemon) => (
          <PokemonRow
            pokemon={pokemon}
            key={pokemon.id}
            onSelect={(pokemon) => selectedPokemonSet(pokemon)}
          />
        ))}
    </tbody>
  </table>
);

export default PokemonTable;