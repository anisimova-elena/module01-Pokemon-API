import React from "react";
import logo from "../assets/pokeapi_logo.png";

interface Props {
  defaultQuery: string;
  search: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface State {
  inputValue: string;
}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: this.props.defaultQuery,
    };
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.target?.value.trim().toLowerCase() });
  }
  render() {
    return (
      <header className="header">
        <div className="container header__container">
          <img src={logo} alt="logo" className="logo" />
          <form action="get" onSubmit={(e) => this.props.search(e)}>
            <h3 className="title">Search Pokemon</h3>
            <input
              name="query"
              className="input"
              value={this.state.inputValue}
              onChange={(e) => this.handleChange(e)}
            />
            <button className="button button__submit" type="submit">
              Search
            </button>
          </form>
        </div>
      </header>
    );
  }
}
