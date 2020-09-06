import React from 'react';
import './navbar.css';
import pokeball from '../../resources/images/pokeball.png'

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-logo-container">
        <h1 className="nav-title">Pokedex</h1>
        <img height="65px" width="65px" style={{marginTop: '10px', marginLeft: '5px'}} src={pokeball} alt="logo" />
      </div>
      <ul className="nav-menu">
        <li className="nav-item">Pokémons</li>
        <li className="nav-item">Types</li>
        <li className="nav-item">About</li>        
      </ul>
    </nav>
  )
}
