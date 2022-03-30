import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = ({ filter, filterSet }) => (
  <Input value={filter} onChange={(e) => filterSet(e.target.value)} />
);

export default PokemonFilter;
