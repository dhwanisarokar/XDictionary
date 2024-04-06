import { useState } from "react";
import dictionary from "../constants/dictionary";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setMessage("");

    if (search) {
      const definition = dictionary.find(
        (word) =>
          word.word.toLocaleLowerCase() === search.toLocaleLowerCase().trim()
      ) || {
        meaning: "Word not found in the dictionary.",
      };
      // console.log(definition.meaning);
      setMessage(definition.meaning);
    }
  };

  return (
    <>
      <h2>Dictionary App</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search for a word..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h4>Definition: </h4>
      <p>{message}</p>
    </>
  );
}

export default App;
