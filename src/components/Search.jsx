import React, { useState } from "react";

function Search({ changeSearch }) {

  function handleSubmit(e) {
    e.preventDefault()
  }
  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => changeSearch(e.target.value)}
        value={""}
      />
    </div>
  );
}

export default Search;

//{(e) => console.log("Searching...")}