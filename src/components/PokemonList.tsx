import { useState, useEffect } from "react";
import { NamedAPIResource } from "../interfaces/NamedAPIResource";

export default function PokemonList() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setState(json.results);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return state.map((item: NamedAPIResource, index: number) => (
    <div className="card" key={index + 1}>
      <img
        src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
        alt={item.name}
        className="img"
      />
      <div className="text">
        <h4 className="card__name">
          {item.name[0].toUpperCase() + item.name.slice(1)}
        </h4>
        <button className="button card__button" name={item.name}>
          See more
        </button>
      </div>
    </div>
  ));
}
