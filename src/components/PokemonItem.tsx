import { IPokemon } from "../interfaces/Pokemon";

interface Props {
  pokemon: IPokemon;
}

export default function Pokemon(props: Props) {
  const pokemon = props.pokemon;

  return (
    <div className="card" key={pokemon.id}>
      <img
        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        alt={pokemon.name}
        className="img"
      />
      <div className="text">
        <h4 className="card__name">
          {pokemon.name
            ? pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
            : pokemon.name}
        </h4>
        <p>
          Abilities:
          {pokemon.abilities?.length ? pokemon.abilities.length : "none"}
        </p>
        <p>Forms:{pokemon.forms?.length ? pokemon.abilities.length : "none"}</p>
        <p>Moves:{pokemon.moves?.length ? pokemon.abilities.length : "none"}</p>
      </div>
    </div>
  );
}
