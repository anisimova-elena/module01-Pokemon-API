import React from 'react';
import { IPokemon } from '../interfaces/Pokemon';

interface Props {
  pokemon: IPokemon;
}

export default class Pokemon extends React.Component<Props> {
  pokemon = this.props.pokemon;

  render() {
    return (
      <div className="card" key={this.pokemon.id}>
        <img
          src={`https://img.pokemondb.net/artwork/large/${this.pokemon.name}.jpg`}
          alt={this.pokemon.name}
          className="img"
        />
        <div className="text">
          <h4 className="card__name">
            {this.pokemon.name
              ? this.pokemon.name[0].toUpperCase() + this.pokemon.name.slice(1)
              : this.pokemon.name}
          </h4>
          <p>
            <b>Height:</b> {this.pokemon.height}
          </p>
          <p>
            <b>Weight:</b> {this.pokemon.weight}
          </p>
          <p>
            <b>Default:</b> {this.pokemon.is_default ? 'yes' : 'no'}
          </p>
          <p>
            <b>Abilities</b>
            {this.pokemon.abilities?.length
              ? ' (' + this.pokemon.abilities.length + '): '
              : ' ' + 'none'}
            {this.pokemon.abilities.reduce<string>(
              (prevValue, currValue, currIndex) => {
                let text = '';
                if (currIndex) {
                  text += ', ';
                }
                text += currValue.ability.name;
                return prevValue + text;
              },
              ''
            )}
          </p>

          <p>
            <b>Forms:</b>
            {this.pokemon.forms?.length
              ? ' ' + this.pokemon.abilities.length
              : ' ' + 'none'}
          </p>
          <p>
            <b>Moves:</b>
            {this.pokemon.moves?.length
              ? ' ' + this.pokemon.abilities.length
              : ' ' + 'none'}
          </p>
        </div>
      </div>
    );
  }
}
