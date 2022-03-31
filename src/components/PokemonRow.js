import React from "react";
import Button from "@mui/material/Button";
import PokemonType from "../pokemonType";
import PropTypes from "prop-types";

const PokemonRow = ({ pokemon, onClick }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button variant="contained" onClick={() => onClick(pokemon)}>
        MORE INFO
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemom: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;
