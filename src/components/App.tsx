import { useState } from "react";
import PokemonList from "./PokemonList";

export default function App() {
  const [state, setState] = useState({
    isLoaded: false,
    query: localStorage.getItem("query"),
  });

  if (!state.query) {
    return (
      <main className="container main__container">
        <PokemonList />
      </main>
    );
  }
  return <>Идёт загрузка результата</>;
}
