import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => {
        setListing(data);
      });
  }, []);
  const returnId = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      const tempCard = listing.filter((card) => card.id !== id);
      setListing(tempCard);
    });
  };

  return (
    <div className="app">
      <Header />
      <ListingsContainer listing={listing} returnId={returnId} />
    </div>
  );
}

export default App;
