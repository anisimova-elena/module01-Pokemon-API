import { useState } from "react";
import Header from "./Header";
import Results from "./Results";

export default function App() {
  const [query, setQuery] = useState(localStorage.getItem("query") || "");

  function search(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form as HTMLFormElement);
    localStorage.setItem("query", formData.get("query") as string);
    setQuery(formData.get("query") as string);
  }

  return (
    <>
      <Header search={search} defaultQuery={query} />
      <div className="container main__container">
        <Results query={query} />
      </div>
    </>
  );
}
