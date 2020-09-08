import React from 'react';
import './pokemoncard.css';
import defaultType from '../../resources/images/types/grass.png';
import defaultPokemon from '../../resources/images/unnamed.png';
import { Stats, statistics, Types } from '../../styles';

const statNameStyle = { fontSize: "10px", marginTop: '3px', textAlign: 'center' };
const statPowerStyle = { fontSize: "13px", marginTop: '3px', fontWeight: 'bold' };
const sectionHeading = { fontSize: "14px", fontWeight: 'bold', marginLeft: '10px' };
const typeLogoStyle = { marginLeft: "5px", marginRight: '5px', borderRadius: "100px" };
const avatarStyle = { borderRadius: "100px", background: "#edf4ff", padding: "30px" };

export default function PokemonCard({ pokemon }) {
  return (
    <div className="card-container" style={{ background: Types[pokemon.types[0].type.name].theme }}>
      <div className="card-head">
        <div className="pokemon-name">
          <p> <span style={{padding:"4px", fontSize: "16px", borderRadius: "25px", background:"white"}}>#{pokemon.id}</span>&nbsp;
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
        <div className="type-logo">
          {pokemon.types.map((type => {
            return <img height="27" width="27" style={typeLogoStyle} src={Types[type.type.name].logo || defaultType} />
          }))}
        </div>
      </div>
      <div className="card-avatar">
        <img style={avatarStyle} height="160" width="170" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} />
      </div>
      <div className="card-details">
        <div className="details-top">
          <div className="single-stat">
            <img height="25" width="25" src={Stats.xp} /> &nbsp;
            <p style={{ lineHeight: "1.5" }}>{pokemon.base_experience}</p>
          </div>
          <div className="single-stat">
            <img height="25" width="25" src={Stats.height} /> &nbsp;
            <p style={{ lineHeight: "1.5" }}>{pokemon.height}</p>
          </div>
          <div className="single-stat">
            <img height="25" width="25" src={Stats.weight} /> &nbsp;
            <p style={{ lineHeight: "1.5" }}>{pokemon.weight}</p>
          </div>
        </div>
        <p style={sectionHeading}>Stats</p>
        <div className="details-bottom">
          {
            pokemon.stats.map(((singleStat, index) => {
              return <div key={index} className="stats-details">
                <img height="35" width="35" style={{ marginLeft: '5px' }} src={statistics[singleStat.stat.name]} /> &nbsp;
                <p style={statNameStyle}>{singleStat.stat.name}</p>
                <p style={statPowerStyle}>{singleStat.base_stat}</p>
              </div>
            }))
          }
        </div>
      </div>
    </div>
  )
}
