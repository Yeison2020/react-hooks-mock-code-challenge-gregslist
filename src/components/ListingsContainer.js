import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listing, returnId }) {
  return (
    <main>
      <ul className="cards">
        {listing.map((elements) => {
          return (
            <ListingCard
              key={elements.id}
              description={elements.description}
              location={elements.location}
              image={elements.image}
              id={elements.id}
              returnId={returnId}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
