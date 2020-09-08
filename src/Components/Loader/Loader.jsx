import React from 'react';
import Pokeball from '../../resources/images/pokeball.png';
import './loader.css';

export default function Loader() {
  return (
    <div className="container">
      <img height="250" width="250" src={Pokeball} alt="...loading"/>
      <h1 className="title">....Loading</h1>
    </div>
  )
}
