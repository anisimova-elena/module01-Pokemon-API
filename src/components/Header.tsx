import logo from "../assets/pokeapi_logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <img src={logo} alt="logo" className="logo" />
        <form action="get">
          <h3 className="title">Search Pokemon</h3>
          <input className="input"></input>
          <input
            className="button button__submit"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </header>
  );
}
