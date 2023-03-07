import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const catchPokemon = () => {
    if (pokemonNameInput !== "") {
      //lesson 3 exe-G-11
      setCaught(caught.concat(pokemonNameInput.trim())); // trim for words like "  bb" that has space before chars
      setPokemonNameInput(""); //for cleaning the input after click
    }
  };
  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>click</button>
      <ul>
        {caught.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
export default CaughtPokemon;
