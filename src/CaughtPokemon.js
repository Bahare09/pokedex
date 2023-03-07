import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const catchPokemon = () => setCaught(caught.concat("first"));
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
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
