import { useState } from "react";

function Search({ onSearch }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    onSearch(text);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Enter city name"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Search;