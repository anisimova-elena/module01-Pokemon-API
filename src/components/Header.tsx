import React from 'react';
import logo from '../assets/pokeapi_logo.png';

interface Props {
  defaultQuery: string;
  search: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface State {
  inputValue: string;
  hasErrors: boolean;
}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: this.props.defaultQuery,
      hasErrors: false,
    };
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    this.setState({
      hasErrors: true,
    });
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.target?.value.trim().toLowerCase() });
  }
  render() {
    if (this.state.hasErrors) {
      throw new Error('Simulate a JS error!');
    }
    return (
      <header className="header">
        <div className="container header__container">
          <img src={logo} alt="logo" className="logo" />
          <button onClick={(e) => this.handleClick(e)}>Throw Error</button>
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
