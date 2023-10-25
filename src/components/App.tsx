import React from "react";
import Header from "./Header";
import Results from "./Results";

export default class App extends React.Component {
  state = {
    query: localStorage.getItem("query") || "",
  };

  search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form as HTMLFormElement);
    localStorage.setItem("query", formData.get("query") as string);
    this.setState({
      query: formData.get("query"),
    });
  };

  render() {
    return (
      <>
        <Header search={this.search} defaultQuery={this.state.query} />
        <div className="container main__container">
          <Results query={this.state.query} />
        </div>
      </>
    );
  }
}
