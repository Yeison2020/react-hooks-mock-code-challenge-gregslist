import React from "react";
import Search from "./Search";

function Header({ search, handleSubmitted }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} handleSubmitted={handleSubmitted} />
    </header>
  );
}

export default Header;
