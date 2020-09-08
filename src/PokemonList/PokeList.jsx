import React, { useState, useEffect } from 'react';
import PokemonCard from "../Components/PokemonCard/PokemonCard";
import './pokelist.css'

export default function PokeList() {
  const [pokemons, setPokemon] = useState([
    {
      name: 'Balbusur',
      avatar: 'default',
      hp: "100",
      type: "grass"
    },
    {
      name: 'Balbusur',
      avatar: 'default',
      hp: "100",
      type: "grass"
    },
    {
      name: 'Balbusur',
      avatar: 'default',
      hp: "100",
      type: "grass"
    },
    {
      name: 'Balbusur',
      avatar: 'default',
      hp: "100",
      type: "grass"
    },
    {
      name: 'Balbusur',
      avatar: 'default',
      hp: "100",
      type: "grass"
    },
    {
      name: 'Balbusur',
      avatar: 'default',
      hp: "100",
      type: "grass"
    },
  ])

  return (
    <div className="main-container">
      <div className="list-container">
        {pokemons.map(p => {
          return <PokemonCard pokemon={p} />
        })}
      </div>
    </div>
  )
}
