import React, { useState, useEffect } from 'react';
import PokemonCard from "../Components/PokemonCard/PokemonCard";
import Loader from "../Components/Loader/Loader";
import './pokelist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Services from "../services/Service.js";
import { API_BASE_URL } from "../config";

export default function PokeList() {
  const [pokemonRecord, setPokemonRecord] = useState([]);
  const [prevPageUrl, setPrevPage] = useState("");
  const [nextPageUrl, setNextPage] = useState("");
  const [currentUrl, setCurrentUrl] = useState(`${API_BASE_URL}pokemon?offset=0&limit=5`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInitialData() {
      let pokemonAPIResponse = await Services.getAllPokemon(currentUrl);
      setPrevPage(pokemonAPIResponse.previous);
      setNextPage(pokemonAPIResponse.next);
      await getDetailRecords(pokemonAPIResponse.results);
      setLoading(false);
    }
    getInitialData();
  }, [currentUrl])

  const getDetailRecords = async (pokemonList) => {
    let _pokemon = await Promise.all(
      pokemonList.map(async pokemon => {
        let _pokemonRecord = await Services.getSinglePokemon(pokemon.url);
        return _pokemonRecord;
      })
    )
    setPokemonRecord(_pokemon);
  }

  const goNext = async () => {
    if(!nextPageUrl === null) { return }
    setLoading(true)
    let pokemonAPIResponse = await Services.getAllPokemon(nextPageUrl);
    setPrevPage(pokemonAPIResponse.previous);
    setNextPage(pokemonAPIResponse.next);
    await getDetailRecords(pokemonAPIResponse.results);
    setLoading(false);
  }

  const goBack = async () => {
    if(!prevPageUrl) { return }
    setLoading(true)
    let pokemonAPIResponse = await Services.getAllPokemon(prevPageUrl);
    setPrevPage(pokemonAPIResponse.previous);
    setNextPage(pokemonAPIResponse.next);
    await getDetailRecords(pokemonAPIResponse.results);
    setLoading(false);
  }

  return (
    <React.Fragment>
      {loading ? <Loader /> : <div className="main-container">
        <div className="pagination-button">
          <FontAwesomeIcon onClick={goBack} size="5x" color={prevPageUrl? "red" : "grey" } icon={faArrowAltCircleLeft} />
        </div>
        <div className="list-container">
          {pokemonRecord.map(pokemon => {
            return <PokemonCard pokemon={pokemon} />
          })}
        </div>
        <div className="pagination-button">
          <FontAwesomeIcon onClick={goNext} size="5x" color={nextPageUrl? "red" : "grey" } icon={faArrowAltCircleRight} />
        </div>
      </div>}
    </React.Fragment>
  )
}
