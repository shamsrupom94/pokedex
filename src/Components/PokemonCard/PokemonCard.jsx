import React from 'react';
import './pokemoncard.css';
import defaultType from '../../resources/images/types/grass.png';
import defaultPokemon from '../../resources/images/unnamed.png';
import { Stats } from '../../styles';

const statNameStyle = { fontSize: "10px", marginTop: '3px', textAlign: 'center' };
const statPowerStyle = { fontSize: "13px", marginTop: '3px', fontWeight: 'bold' };
const sectionHeading = { fontSize: "14px", fontWeight: 'bold', marginLeft: '10px' };

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
        <p style={sectionHeading}>Basics</p>
        <div className="details-top">
          <div className="single-stat">
            <img height="25" width="25" src={Stats.xp} /> &nbsp;
            <p style={{lineHeight: "1.5"}}>70</p>
          </div>
          <div className="single-stat">
            <img height="25" width="25" src={Stats.height} /> &nbsp;
            <p style={{lineHeight: "1.5"}}>70</p>
          </div>
          <div className="single-stat">
            <img height="25" width="25" src={Stats.weight} /> &nbsp;
            <p style={{lineHeight: "1.5"}}>70</p>
          </div>
        </div>
        <p style={sectionHeading}>Stats</p>
        <div className="details-bottom">
          <div className="stats-details">
            <img height="35" width="35" style={{ marginLeft: '5px' }} src={Stats.hp} /> &nbsp;
            <p style={statNameStyle}>HP</p>
            <p style={statPowerStyle}>400</p>
          </div>
        </div>
      </div>
    </div>
  )
}
