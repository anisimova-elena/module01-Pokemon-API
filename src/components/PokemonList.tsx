import React from "react";
import { IPokemon } from "../interfaces/Pokemon.ts";

interface Props {
  pokemons: IPokemon[];
}

export default class PokemonList extends React.Component<Props> {
  state = {
    pokemonsList: this.props.pokemons,
  };

  render(): React.ReactNode {
    return this.state.pokemonsList.map((item: IPokemon, index: number) => (
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
}
