import { useState } from "react";
import logo from "../assets/pokeapi_logo.png";

interface Props {
  search: (event: React.FormEvent<HTMLFormElement>) => void;
  defaultQuery: string;
}

export default function Header(props: Props) {
  const search = props.search;
  const [inputValue, setInputValue] = useState(props.defaultQuery);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target?.value.trim().toLowerCase());
  }

  return (
    <header className="header">
      <div className="container header__container">
        <img src={logo} alt="logo" className="logo" />
        <form action="get" onSubmit={(e) => search(e)}>
          <h3 className="title">Search Pokemon</h3>
          <input
            name="query"
            className="input"
            value={inputValue}
            onChange={(e) => handleChange(e)}
          />
          <button className="button button__submit" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
