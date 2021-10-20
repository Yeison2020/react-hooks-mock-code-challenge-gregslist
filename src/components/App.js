import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listing, setListing] = useState([]);

  const returnId = (id) => {
    console.log(id);
    return id;
  };

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => {
        setListing(data);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <ListingsContainer listing={listing} returnId={returnId} />
    </div>
  );
}

export default App;
