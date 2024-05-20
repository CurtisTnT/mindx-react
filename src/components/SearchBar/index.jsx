import React from "react";

import "./style.css";

export default function SearchBar(props) {
  return (
    <div className="search-input-container" style={{ marginBottom: 10 }}>
      <input
        type="text"
        placeholder="Search pokemon..."
        onChange={(e) => props.onFilterPokemons(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
