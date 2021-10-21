import React from "react";

function Search({ search, handleSubmitted }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleSubmitted(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
