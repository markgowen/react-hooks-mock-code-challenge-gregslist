import React from "react";
import Search from "./Search";

function Header({query, setQuery, handleSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search query={query} setQuery={setQuery} handleSearch={handleSearch} />
    </header>
  );
}

export default Header;
