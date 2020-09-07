import React from 'react';
import './pokemoncard.css';
import defaultType from '../../resources/images/grass.png';
import defaultPokemon from '../../resources/images/unnamed.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging, faDumbbell, faSun, faRuler } from '@fortawesome/free-solid-svg-icons';

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
        <img style={{ borderRadius: "100px" }} height="160" width="175" src={defaultPokemon} />
      </div>
      <div className="card-details">
        <div className="details-top">
          <div className="single-stat">
            <FontAwesomeIcon icon={faSun} />&nbsp;
            <p>70</p>
          </div>
          <div className="single-stat">
            <FontAwesomeIcon icon={faRuler} />&nbsp;
            <p>40</p>
          </div>
          <div className="single-stat">
            <FontAwesomeIcon icon={faWeightHanging} />&nbsp;
            <p>400</p>
          </div>
        </div>
        <div className="details-bottom">
          <p>{pokemon.avatar}</p>
          <p>{pokemon.hp}</p>
        </div>
      </div>
    </div>
  )
}
