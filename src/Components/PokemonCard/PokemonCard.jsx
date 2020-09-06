import React from 'react';
import './pokemoncard.css';
import defaultType from '../../resources/images/grass.png';
import defaultPokemon from '../../resources/images/defaultpok.jpg';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="card-container" style={{ background: "#ECFFE4" }}>
      <div className="card-head">
        <div className="pokemon-name">
          <p>{pokemon.name}</p>
        </div>
        <div className="type-logo">
          <img height="25" width="25" src={defaultType} />
        </div>
      </div>
      <div className="card-avatar">
        <img style={{ borderRadius: "100px" }} height="175" width="175" src={defaultPokemon} />
      </div>
      <p>{pokemon.avatar}</p>
      <p>{pokemon.hp}</p>
    </div>
  )
}
